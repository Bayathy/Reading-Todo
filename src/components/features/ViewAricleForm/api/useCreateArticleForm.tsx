import { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { useMutation } from 'urql'

import type { NewArticle } from '@/gql/graphql'
import type { SubmitHandler } from 'react-hook-form'

import { articleListStore } from '@/components/domains/Article'
import { useAuth } from '@/components/shared/api'
import { createArticleMutation } from '@/components/shared/api/graphql/create-article-mutation'

// const scheme = z.object({
//   url: z.string().min(1, { message: 'url is Required' }),
// })
//
// type ArticleFormState = z.infer<typeof scheme>

type ArticleFormState = {
  url: string
}

export const useCreateArticleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ArticleFormState>({
    mode: 'onChange',
    defaultValues: { url: '' },
  })
  const setArticleList = useSetRecoilState(articleListStore)
  const { authState } = useAuth()

  const [newArticleResult, createNewArticle] = useMutation(
    createArticleMutation,
  )
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onArticleFormSubmit: SubmitHandler<ArticleFormState> = useCallback(
    async data => {
      const variables: NewArticle = {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain,@typescript-eslint/no-non-null-assertion
        userId: authState?.uid!,
        url: data.url,
      }
      try {
        const res = await createNewArticle({ input: variables })
        const newRecord = res.data?.createArticle
        if (!newRecord) {
          throw new Error('error')
        }

        setArticleList(oldList => [
          ...oldList,
          {
            id: newRecord.id,
            title: newRecord.title,
            url: newRecord.url,
            userId: newRecord.userId,
            createdAt: newRecord.createdAt,
            done: newRecord.done,
          },
        ])
      } catch (error: unknown) {
        if (error instanceof Error) console.log(error.message)
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  return {
    register,
    handleSubmit,
    onArticleFormSubmit,
    isValid,
    isDirty,
    newArticleResult,
  }
}

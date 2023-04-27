import { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { useMutation } from 'urql'

import type { NewArticle } from '@/gql/graphql'
import type { SubmitHandler } from 'react-hook-form'

import { createArticle } from '@/components/domains/Article/api/createArticle'

type ArticleFormState = {
  url: string
  title: string
}

export const useCreateArticleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ArticleFormState>({
    mode: 'onChange',
    defaultValues: { title: '', url: '' },
  })

  const [newArticleResult, createNewArticle] = useMutation(createArticle)
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onArticleFormSubmit: SubmitHandler<ArticleFormState> = useCallback(
    async data => {
      const variables: NewArticle = { userId: 'test', ...data }
      await createNewArticle({ input: variables })
    },
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

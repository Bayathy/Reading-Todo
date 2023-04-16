import { useCallback } from 'react'

import { useForm } from 'react-hook-form'

import type { SubmitHandler } from 'react-hook-form'

type ArticleFormState = {
  url: string
  title: string
}

export const useArticleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ArticleFormState>({
    mode: 'onChange',
    defaultValues: { title: '', url: '' },
  })

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onArticleFormSubmit: SubmitHandler<ArticleFormState> = useCallback(
    data => console.log(data),
    [],
  )
  return { register, handleSubmit, onArticleFormSubmit, isValid, isDirty }
}

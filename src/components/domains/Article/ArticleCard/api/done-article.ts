import { useMutation } from 'urql'

import { updateArticleMutation } from '@/components/shared/api/graphql'

export const useUpdateArticle = () => {
  const [updateArticleResult, updateFn] = useMutation(updateArticleMutation)

  const updateArticle = (id: number) => {
    updateFn({ input: { id: id, done: true } })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  return { updateArticleResult, updateArticle }
}

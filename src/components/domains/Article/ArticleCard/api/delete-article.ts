import { useMutation } from 'urql'

import { deleteArticleMutation } from '@/components/shared/api/graphql/delete-article-mutation'

export const useDeleteArticle = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [deleteArticleResult, deleteFn] = useMutation(deleteArticleMutation)

  const deleteArticle = (id: number) => {
    deleteFn({ input: { id: id } })
      .then(data => {
        console.log(data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return { deleteArticleResult, deleteArticle }
}

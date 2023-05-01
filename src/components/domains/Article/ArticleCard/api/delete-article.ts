import { useRecoilState } from 'recoil'
import { useMutation } from 'urql'

import { deleteArticleMutation } from '@/components/shared/api/graphql/delete-article-mutation'
import {} from '@/components/shared/store/article-store'
import { articleListStore } from '@/components/domains/Article'

export const useDeleteArticle = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [deleteArticleResult, deleteFn] = useMutation(deleteArticleMutation)
  const [articleList, setArticleList] = useRecoilState(articleListStore)
  const deleteArticle = (id: string) => {
    deleteFn({ input: { id: id } })
      .then(() => {
        const newList = articleList.filter(article => article.id != id)
        setArticleList(() => [...newList])
      })
      .catch(error => {
        console.log(error)
      })
  }
  return { deleteArticleResult, deleteArticle }
}

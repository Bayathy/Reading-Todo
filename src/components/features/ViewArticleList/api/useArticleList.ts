import { useCallback, useEffect } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useQuery } from 'urql'

import { articleListStore } from '@/components/domains/Article'
import { getArticlesQuery } from '@/components/shared/api'
import { articleListSelector } from '@/components/shared/store/article-store'

export const useArticleList = () => {
  const setArticleList = useSetRecoilState(articleListStore)
  const articleList = useRecoilValue(articleListSelector)

  const [{ data }] = useQuery({ query: getArticlesQuery })
  const setArticleListStore = useCallback(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    if (data?.articles) {
      console.log(...data.articles)
      setArticleList(() => [...data.articles])
    }
  }, [data?.articles])

  useEffect(() => {
    setArticleListStore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.articles])

  return { articleList }
}

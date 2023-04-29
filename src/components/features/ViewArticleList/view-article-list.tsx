import type { FC } from 'react'
import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import { useQuery } from 'urql'

import { ArticleCardList } from '@/components/domains/Article'
import { getArticlesQuery } from '@/components/domains/Article/api/get-article-mutation'
import { articleListStore } from '@/components/shared/store/article-store'

export const ViewArticleList: FC = () => {
  const [articleList, setArticleList] = useRecoilState(articleListStore)

  const [{ data }] = useQuery({ query: getArticlesQuery })

  useEffect(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    if (data?.articles) {
      console.log(...data.articles)
      setArticleList(() => [...data.articles])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.articles])

  return articleList ? (
    <ArticleCardList articleList={articleList} />
  ) : (
    <div className={'flex h-12 items-center justify-center text-2xl'}>
      <p>記事を追加しましょう!</p>
    </div>
  )
}

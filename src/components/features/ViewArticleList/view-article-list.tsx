import type { FC } from 'react'
import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import { useQuery } from 'urql'

import { ArticleCardList } from '@/components/domains/Article'
import { getArticles } from '@/components/shared/api'
import { articleListStore } from '@/components/shared/store/article-store'

export const ViewArticleList: FC = () => {
  const [articleList, setArticleList] = useRecoilState(articleListStore)

  const [{ data }] = useQuery({ query: getArticles })

  useEffect(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    if (data?.articles) {
      setArticleList(() => [...data.articles])
    }
    console.log(articleList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return articleList ? (
    <div className={'flex h-12 items-center justify-center text-2xl'}>
      <p>記事を追加しましょう!</p>
    </div>
  ) : (
    <ArticleCardList articleList={articleList} />
  )
}

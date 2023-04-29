import type { FC } from 'react'

import { useRecoilState } from 'recoil'
import { useQuery } from 'urql'

import type { Article } from '@/gql/graphql'

import { ArticleCardList } from '@/components/domains/Article'
import { getArticles } from '@/components/shared/api'
import { articleListStore } from '@/components/shared/store/article-store'

export const ViewArticleList: FC = () => {
  const [articleList] = useRecoilState(articleListStore)

  const [data] = useQuery<Article[]>({ query: getArticles })

  return <ArticleCardList articleList={articleList} />
}

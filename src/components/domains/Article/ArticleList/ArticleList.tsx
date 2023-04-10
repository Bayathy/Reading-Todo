import type { FC } from 'react'

import type { ArticleCardProps } from '@/components/domains/Article/ArticleList/ArticleCard/ArticleCard'

import { ArticleCard } from '@/components/domains/Article/ArticleList/ArticleCard/ArticleCard'

export type ArticleListProps = {
  articleList: ArticleCardProps[]
}
export const ArticleList: FC<ArticleListProps> = ({ articleList }) => {
  return (
    <ol>
      {articleList.map(index => (
        <li key={index.id}>
          <ArticleCard {...index} />
        </li>
      ))}
    </ol>
  )
}

import type { FC } from 'react'

import type { ArticleModel } from '@/components/domains/Article'

import { ArticleCard } from '@/components/domains/Article/ArticleCard/article-card'

export type ArticleListProps = {
  articleList: ArticleModel[]
}
export const ArticleCardList: FC<ArticleListProps> = ({ articleList }) => {
  return (
    <ol className="flex flex-wrap justify-center gap-4">
      {articleList.map(index => (
        <li key={index.id} className="w-max">
          <ArticleCard {...index} />
        </li>
      ))}
    </ol>
  )
}

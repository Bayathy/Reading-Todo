import type { FC } from 'react'

import type { ArticleCardProps } from '@/components/domains/Article/ArticleCard/article-card'

import { ArticleCard } from '@/components/domains/Article/ArticleCard/article-card'

export type ArticleListProps = {
  articleList: ArticleCardProps[]
}
export const ArticleCardList: FC<ArticleListProps> = ({ articleList }) => {
  return (
    <ol className="flex flex-wrap gap-4">
      {articleList.map(index => (
        <li key={index.id} className={'w-full'}>
          <ArticleCard {...index} />
        </li>
      ))}
    </ol>
  )
}

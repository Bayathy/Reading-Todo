import type { FC } from 'react'

import { ArticleCardList } from '@/components/domains/Article'

export const ViewArticleList: FC = () => {
  return <ArticleCardList articleList={[]} />
}

import type { FC } from 'react'

import { ArticleCardList } from '@/components/domains/Article'
import { useArticleList } from '@/components/features/ViewArticleList/api/useArticleList'

export const ViewArticleList: FC = () => {
  const { articleList } = useArticleList()

  return articleList ? (
    <ArticleCardList articleList={articleList} />
  ) : (
    <div className={'flex h-12 items-center justify-center text-2xl'}>
      <p>記事を追加しましょう!</p>
    </div>
  )
}

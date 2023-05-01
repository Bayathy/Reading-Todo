import type { FC } from 'react'

import { ArticleCardList } from '@/components/domains/Article'
import { useArticleList } from '@/components/features/ViewArticleList/api/useArticleList'

export const ViewArticleList: FC = () => {
  const { articleList, filterMode } = useArticleList()

  return articleList.length > 0 ? (
    <ArticleCardList articleList={articleList} />
  ) : filterMode === 'NotRead' ? (
    <div className={'flex h-32 items-center justify-center text-2xl'}>
      <p>記事を追加しましょう!</p>
    </div>
  ) : (
    <></>
  )
}

import type { FC } from 'react'

import { useRecoilState } from 'recoil'

import { ArticleCardList } from '@/components/domains/Article'
import { articleListStore } from '@/components/shared/store/article-store'

export const ViewArticleList: FC = () => {
  const [articleList] = useRecoilState(articleListStore)

  return <ArticleCardList articleList={articleList} />
}

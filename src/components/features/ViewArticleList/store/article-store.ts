import { atom } from 'recoil'

import type { ArticleListProps } from '@/components/domains/Article/ArticleCardList/article-card-list'

export const articleListStore = atom<ArticleListProps>({
  key: 'articleListStore',
  default: {
    articleList: [],
  },
})

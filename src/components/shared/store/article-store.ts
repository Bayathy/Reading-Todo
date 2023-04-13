import { atom } from 'recoil'

import type { ArticleModel } from '@/components/domains/Article'

export const articleListStore = atom<ArticleModel[]>({
  key: 'articleListStore',
  default: [],
})

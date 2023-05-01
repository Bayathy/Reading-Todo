import { atom, selector } from 'recoil'

import type { filterMode } from '@/components/shared/store/types'

import { articleListStore } from '@/components/domains/Article/store/article-store'

export const articleFilterState = atom<filterMode>({
  key: 'ArticleFilterState',
  default: 'NotRead',
})

export const articleListSelector = selector({
  key: 'articleListSelector',
  get: ({ get }) => {
    const filterMode = get(articleFilterState)
    const articleList = get(articleListStore)
    return filterMode === 'Done'
      ? articleList.filter(article => article.done)
      : articleList.filter(article => !article.done)
  },
})

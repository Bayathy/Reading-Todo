import { atom } from 'recoil'

import type { Article } from '../types'

const articleListState = atom<Article[]>({
  key: 'articleListState',
  default: [],
})

export { articleListState }

import { useRecoilValue } from 'recoil'

import { articleListStore } from '@/components/features/ViewArticleList/store/article-store'

export const useArticleStore = () => {
  return useRecoilValue(articleListStore)
}

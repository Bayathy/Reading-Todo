import { useRecoilValue } from 'recoil'

import { articleListStore } from '@/components/features/ViewArticleList/store/store-article'

export const useArticleStore = () => {
  return useRecoilValue(articleListStore)
}

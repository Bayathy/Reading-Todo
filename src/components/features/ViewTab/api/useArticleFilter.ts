import { useCallback } from 'react'

import { useRecoilState } from 'recoil'

import { articleFilterState } from '@/components/shared/store/article-store'

export const useArticleFilter = () => {
  const [filterMode, setStoreFilterMode] = useRecoilState(articleFilterState)
  const setFilterMode = useCallback(
    (mode: typeof filterMode) => {
      setStoreFilterMode(mode)
    },
    [filterMode],
  )
  return { setFilterMode }
}

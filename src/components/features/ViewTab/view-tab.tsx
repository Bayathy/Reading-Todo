import type { FC } from 'react'

import { InlineIcon } from '@iconify/react'

import { useArticleFilter } from '@/components/features/ViewTab/api/useArticleFilter'

export const ViewTab: FC = () => {
  const { setFilterMode } = useArticleFilter()
  return (
    <nav className="fixed bottom-0 z-10 flex h-16 w-full items-center justify-center border-t-2 bg-white ">
      <ul className="m-auto flex h-full w-full max-w-3xl items-center justify-around rounded-2xl ">
        <li>
          <button
            aria-label={'set Not Reading filter'}
            className="text-4xl"
            onClick={() => setFilterMode('NotRead')}
          >
            <InlineIcon icon="material-symbols:article-rounded" />
          </button>
        </li>
        <li>
          <button
            aria-label={'set Done Reading filter'}
            className="text-4xl"
            onClick={() => setFilterMode('Done')}
          >
            <InlineIcon icon="material-symbols:check-small-rounded" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

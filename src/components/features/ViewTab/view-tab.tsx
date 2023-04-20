import type { FC } from 'react'

import { InlineIcon } from '@iconify/react'

export const ViewTab: FC = () => {
  return (
    <nav className="fixed bottom-0 z-10 flex h-16 w-full items-center justify-center border-t-2 bg-white ">
      <ul className="m-auto flex h-full w-full max-w-3xl items-center justify-around rounded-2xl ">
        <li>
          <button className="text-4xl">
            <InlineIcon icon="material-symbols:article-rounded" />
          </button>
        </li>
        <li>
          <button className="text-4xl">
            <InlineIcon icon="material-symbols:check-small-rounded" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

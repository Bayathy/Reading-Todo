import type { FC } from 'react'

import { DropDownMenu } from '../DropDownMenu'

export const Header: FC = () => (
  <header className="h-max border-b-2">
    <div className="flex h-16 items-center">
      <h1 className="m-auto text-center text-xl">記事一覧</h1>
      <div className="absolute right-4">
        <DropDownMenu />
      </div>
    </div>
  </header>
)

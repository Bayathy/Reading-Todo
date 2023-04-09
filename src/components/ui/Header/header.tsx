import type { FC } from 'react'

import type { HeaderProps } from '@/components/features/Header/header.types'

export const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <header className="h-16 bg-blue-500">
      <div>{text}</div>
    </header>
  )
}

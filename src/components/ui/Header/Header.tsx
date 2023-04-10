import type { FC } from 'react'

export type HeaderProps = {
  text: string
}
export const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <header className="h-16">
      <div className="m-auto flex h-full items-center px-4">
        <h1 className="text-2xl">{text}</h1>
      </div>
    </header>
  )
}

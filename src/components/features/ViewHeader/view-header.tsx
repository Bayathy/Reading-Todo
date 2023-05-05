import type { FC } from 'react'

import { useAuth } from '@/components/shared/api/firebase/useAuth'
import { Button } from '@/components/shared/ui'

export type HeaderProps = {
  text: string
}
export const ViewHeader: FC<HeaderProps> = ({ text }) => {
  const { auth, loginWithPopUp, logout } = useAuth()

  return (
    <header className="h-16 w-full border-b-2">
      <div className="flex h-full items-center justify-between px-4">
        <h1 className="text-2xl">{text}</h1>
        <div>
          {auth ? (
            <Button color={'secondary'} onClick={() => logout()}>
              ログアウト
            </Button>
          ) : (
            <Button color={'secondary'} onClick={() => loginWithPopUp()}>
              ログイン
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

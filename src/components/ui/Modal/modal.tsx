import type { FC, PropsWithChildren } from 'react'

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  return <dialog>{children}</dialog>
}

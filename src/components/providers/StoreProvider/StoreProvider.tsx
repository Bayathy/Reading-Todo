import type { FC, PropsWithChildren } from 'react'

import { RecoilRoot } from 'recoil'

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

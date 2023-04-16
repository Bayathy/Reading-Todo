import type { FC, PropsWithChildren } from 'react'

import { cacheExchange, Client, fetchExchange } from '@urql/core'
import { Provider } from 'urql'

export const client = new Client({
  url: 'http://localhost:5173/graphql',
  exchanges: [cacheExchange, fetchExchange],
})
export const GqlProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>
}

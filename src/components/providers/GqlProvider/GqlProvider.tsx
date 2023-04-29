import type { FC, PropsWithChildren } from 'react'

import { cacheExchange, Client, fetchExchange } from '@urql/core'
import { Provider } from 'urql'

export const client = new Client({
  url: import.meta.env.VITE_API_SERVER_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {},
})
export const GqlProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>
}

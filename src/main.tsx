import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/style/global.css'

import { Home } from '@/components/pages'
import { GqlProvider, StoreProvider } from '@/components/providers'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <GqlProvider>
        <Home />
      </GqlProvider>
    </StoreProvider>
  </React.StrictMode>,
)

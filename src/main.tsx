import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/global.css'
import { Home } from '@/components/view/Home/Home'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line unicorn/prefer-top-level-await
  ;(async () => {
    import('./mocks/browser').then(m => m.worker.start())
  })()
}

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

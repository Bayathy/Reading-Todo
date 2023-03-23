import React from 'react'
import ReactDOM from 'react-dom/client'

import { RecoilRoot } from 'recoil'

import { App } from './App'
import { Header } from './components/Header'
import './style/global.css'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <div className="grid min-h-screen w-full grid-cols-[100%] grid-rows-[auto_1fr]">
        <Header />
        <App />
      </div>
    </RecoilRoot>
  </React.StrictMode>,
)

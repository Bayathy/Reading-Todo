import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { Header } from './components/Header'
import './style/global.css'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <div className="grid min-h-screen w-full grid-cols-[100%] grid-rows-[auto_1fr]">
      <Header />
      <App />
    </div>
  </React.StrictMode>,
)

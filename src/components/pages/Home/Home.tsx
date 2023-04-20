import type { FC } from 'react'

import { StoreProvider } from '@/components/providers/StoreProvider/StoreProvider'
import { Header } from '@/components/ui'

export const Home: FC = () => {
  return (
    <StoreProvider>
      <div className="grid min-h-screen w-full grid-cols-[100%] grid-rows-[auto_1fr]">
        <Header text={'Dash Board'} />
        <main className="max-w-3xl px-4">
          <p>Hello world</p>
        </main>
      </div>
    </StoreProvider>
  )
}

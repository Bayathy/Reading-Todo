import type { FC } from 'react'

import { Icon } from '@iconify/react'
import * as RadixTabs from '@radix-ui/react-tabs'

import { Card } from './components/Card'
import { FormDialog } from './components/FormDialog'

export const App: FC = () => {
  return (
    <main className="m-auto h-full w-full max-w-4xl p-4">
      <RadixTabs.Root
        className="m-auto flex h-full w-full max-w-4xl flex-col"
        defaultValue="tab1"
      >
        <RadixTabs.Content value="tab1">
          <div className="flex justify-end">
            <FormDialog />
          </div>
          <section className="mt-2">
            <Card />
          </section>
        </RadixTabs.Content>
        <RadixTabs.List className="fixed bottom-0 left-[50%] flex h-16 w-full translate-x-[-50%] border-t-2">
          <RadixTabs.Trigger
            value="tab1"
            className="flex flex-1 items-center justify-center text-4xl hover:bg-slate-200"
          >
            <Icon icon="material-symbols:article-outline" />
          </RadixTabs.Trigger>
          <RadixTabs.Trigger
            value="tab2"
            className="flex flex-1 items-center justify-center text-4xl hover:bg-slate-200"
          >
            <Icon icon="material-symbols:history" />
          </RadixTabs.Trigger>
        </RadixTabs.List>
      </RadixTabs.Root>
    </main>
  )
}

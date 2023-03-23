import type { FC } from 'react'
import { useEffect } from 'react'

import { Icon } from '@iconify/react'
import * as RadixTabs from '@radix-ui/react-tabs'
import { useRecoilState } from 'recoil'

import { Card } from './components/Card'
import { FormDialog } from './components/FormDialog'
import { articleListState } from './store'

import type { CardProps } from './components/Card'

const testCardData: CardProps[] = [
  { title: 'テストタイトル', url: 'https:blog.bayathy.com', id: 'id' },
  { title: 'テストタイトル', url: 'https:blog.bayathy.com', id: 'idid' },

  { title: 'テストタイトル', url: 'https:blog.bayathy.com', id: 'ididid' },

  { title: 'テストタイトル', url: 'https:blog.bayathy.com', id: 'idididid' },
]

export const App: FC = () => {
  const [articleList, setArticleList] = useRecoilState(articleListState)

  useEffect(() => {
    setArticleList(testCardData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="m-auto h-full w-full max-w-4xl p-4">
      <RadixTabs.Root
        className="m-auto flex h-full w-full max-w-4xl flex-col"
        defaultValue="tab1"
      >
        <div className="mb-16">
          <RadixTabs.Content value="tab1">
            <div className="flex justify-end">
              <FormDialog />
            </div>
            <section className="mt-2">
              <ol className="flex w-full flex-wrap justify-center gap-4">
                {articleList.map((index, key) => (
                  <li key={key} className="w-full sm:w-fit">
                    <Card {...index} />
                  </li>
                ))}
              </ol>
            </section>
          </RadixTabs.Content>
        </div>
        <RadixTabs.List className="fixed bottom-0 left-[50%] flex h-16 w-full translate-x-[-50%] border-t-2 bg-white">
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

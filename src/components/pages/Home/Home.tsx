import type { FC } from 'react'
import { useEffect } from 'react'

import { useSetRecoilState } from 'recoil'

import { ViewArticleForm } from '@/components/features/ViewAricleForm/view-article-form'
import { ViewArticleList } from '@/components/features/ViewArticleList'
import { ViewHeader } from '@/components/features/ViewHeader'
import { ViewTab } from '@/components/features/ViewTab'
import { articleListStore } from '@/components/shared/store/article-store'
import { Button, Modal } from '@/components/shared/ui'
import { useModal } from '@/components/shared/ui/Modal/api/useModal'

export const Home: FC = () => {
  const setArticleList = useSetRecoilState(articleListStore)

  useEffect(() => {
    setArticleList([
      {
        id: 1,
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2022-12-31T13:50:40+09:00'),
      },
      {
        id: 2,
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2023-01-01T13:50:40+09:00'),
      },
      {
        id: 3,
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2022-01-01T13:40:40+09:00'),
      },
      {
        id: 4,
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2021-12-31T13:50:40+09:00'),
      },
      {
        id: 5,
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2021-12-31T13:50:40+09:00'),
      },
    ])
  }, [setArticleList])

  const { ref, showModal, closeModal } = useModal()

  return (
    <div className="min-h-screen w-full">
      <ViewHeader text={'Dash Board'} />
      <main className="relative m-auto px-4">
        <div className="mt-4 flex justify-end">
          <Button onClick={showModal} color={'primary'}>
            記事の追加
          </Button>
        </div>
        <section className="m-auto mt-4">
          <ViewArticleList />
        </section>
      </main>
      <Modal onClose={closeModal} ref={ref}>
        <ViewArticleForm />
      </Modal>
      <footer className={'mt-20'}>
        <ViewTab />
      </footer>
    </div>
  )
}

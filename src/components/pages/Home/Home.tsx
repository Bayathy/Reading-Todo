import type { FC } from 'react'

import { ViewArticleForm } from '@/components/features/ViewAricleForm/view-article-form'
import { ViewArticleList } from '@/components/features/ViewArticleList'
import { ViewHeader } from '@/components/features/ViewHeader'
import { ViewTab } from '@/components/features/ViewTab'
import { useAuth } from '@/components/shared/api'
import { Button, Modal } from '@/components/shared/ui'
import { useModal } from '@/components/shared/ui/Modal/api/useModal'

export const Home: FC = () => {
  const { ref, showModal, closeModal } = useModal()
  const { authState } = useAuth()

  return (
    <div className="grid min-h-screen w-full grid-cols-[100%] grid-rows-[auto_1fr]">
      <ViewHeader text={'Dash Board'} />
      <main className="relative m-auto h-full w-full px-4">
        {authState ? (
          <>
            <div className="mt-4 flex justify-end">
              <Button
                aria-label={'add article'}
                onClick={showModal}
                color={'primary'}
              >
                記事の追加
              </Button>
            </div>
            <section className="m-auto mt-4">
              <ViewArticleList />
            </section>
          </>
        ) : (
          <div className={'flex h-32 items-center justify-center'}>
            <div>
              <h2 className={'text-2xl'}>ログインしてください！</h2>
            </div>
          </div>
        )}
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

import type { FC } from 'react'

import { ViewArticleForm } from '@/components/features/ViewAricleForm/view-article-form'
import { ViewArticleList } from '@/components/features/ViewArticleList'
import { ViewHeader } from '@/components/features/ViewHeader'
import { ViewTab } from '@/components/features/ViewTab'
import { Button, Modal } from '@/components/shared/ui'
import { useModal } from '@/components/shared/ui/Modal/api/useModal'

export const Home: FC = () => {
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

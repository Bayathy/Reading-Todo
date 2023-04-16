import type { FC } from 'react'

import { useArticleForm } from '@/components/features/ViewAricleForm/api/useArticleForm'
import { Button } from '@/components/ui'

export const ViewArticleForm: FC = () => {
  const { register, handleSubmit, onArticleFormSubmit, isValid, isDirty } =
    useArticleForm()

  return (
    <div>
      <form
        onSubmit={handleSubmit(onArticleFormSubmit)}
        aria-label="article input form"
        className="m-auto w-4/5"
      >
        <h2 className="my-2 text-xl font-bold">記事を追加する</h2>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="url">URLを入力</label>
          <input
            id="url"
            className="rounded-md border-2"
            aria-label="input url"
            type="text"
            {...register('url')}
          />
          <label htmlFor="title">タイトルを入力</label>
          <input
            id="title"
            className="rounded-md border-2"
            aria-label="input url"
            type="text"
            {...register('title')}
          />
        </div>
        <div className={'mt-4 flex justify-end'}>
          <Button
            disabled={!(isDirty && isValid)}
            label={'保存する'}
            color={'primary'}
          />
        </div>
      </form>
    </div>
  )
}

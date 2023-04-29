import type { FC } from 'react'
import { useEffect } from 'react'

import { useCreateArticleForm } from '@/components/features/ViewAricleForm/api/useCreateArticleForm'
import { Button } from '@/components/shared/ui'

export const ViewArticleForm: FC = () => {
  const {
    register,
    handleSubmit,
    onArticleFormSubmit,
    isValid,
    isDirty,
    newArticleResult,
  } = useCreateArticleForm()

  useEffect(() => {
    console.log(newArticleResult)
  }, [newArticleResult])

  return (
    <div>
      <form
        onSubmit={handleSubmit(onArticleFormSubmit)}
        aria-label="article input form"
        className="m-auto w-full md:w-4/5 "
      >
        <h2 className="my-2 text-xl font-bold">記事を追加する</h2>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="url">URLを入力</label>
          <input
            id="url"
            className="h-12 rounded-md border-2 px-2 text-lg"
            aria-label="input url"
            type="text"
            placeholder={'https://'}
            {...register('url', { required: true })}
            required
          />
        </div>
        <div className={'mt-4 flex justify-end'}>
          <Button disabled={!(isDirty && isValid)} color={'primary'}>
            保存する
          </Button>
        </div>
      </form>
    </div>
  )
}

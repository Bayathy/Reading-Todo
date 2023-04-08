/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react'
import { useState } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

import { articleListState } from '../../store'

import type { Article } from '../../types'
import type { SubmitHandler } from 'react-hook-form'

export type FormState = Article

export const FormDialog: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<FormState>({
    mode: 'onChange',
    defaultValues: { url: '', title: '' },
  })

  const setArticleList = useSetRecoilState(articleListState)

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormState> = data => {
    if (data.title && data.url) {
      setArticleList(oldArticleList => [
        ...oldArticleList,
        {
          ...data,
        },
      ])
    }
    setOpen(false)
  }

  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen}>
      <RadixDialog.Trigger asChild>
        <button className="rounded-xl bg-blue-400 py-2 px-4 text-white hover:bg-blue-500">
          追加する
        </button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/40" />
        <RadixDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-6 shadow-xl focus:outline-none">
          <div className="flex justify-end ">
            <RadixDialog.Close asChild>
              <button
                className="inline-flex h-8 appearance-none items-center justify-center rounded-md bg-red-200 px-2 text-red-900 hover:bg-red-300 focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                閉じる
              </button>
            </RadixDialog.Close>
          </div>
          <RadixDialog.Title className="m-0 text-xl font-medium">
            記事の追加
          </RadixDialog.Title>
          <RadixDialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            追加したい記事のURLを入力してください。
          </RadixDialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-violet11 text-left text-[15px]"
                htmlFor="name"
              >
                タイトル
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                placeholder="タイトルを入力"
                {...register('title')}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-violet11 text-left text-[15px]"
                htmlFor="name"
              >
                URL
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                placeholder="https://"
                {...register('url')}
              />
            </fieldset>
            <div className="mt-[25px] flex items-center justify-end">
              <button
                type="submit"
                className="inline-flex h-8 items-center justify-center rounded-md bg-green-200 px-4 font-medium leading-none text-green-600 hover:bg-green-300 focus:outline-none disabled:bg-gray-500 disabled:text-slate-300"
              >
                追加する
              </button>
            </div>
          </form>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

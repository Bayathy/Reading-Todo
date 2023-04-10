import type { FC } from 'react'

import { InlineIcon } from '@iconify/react'

export type ArticleCardProps = {
  id: number
  title: string
  url: string
  createdAt: Date
}
export const ArticleCard: FC<ArticleCardProps> = ({
  title,
  url,
  createdAt,
}) => {
  return (
    <div className="w-full max-w-md rounded-2xl border-2 border-gray-500 p-4">
      <div className="h-16">
        <h1 className="line-clamp-2 text-xl font-bold hover:text-blue-500">
          <a href={url}>{title}</a>
        </h1>
      </div>
      <div className="mt-2  flex items-center justify-between">
        <p className="text-xl font-bold leading-none">{createdAt.getDate()}</p>
        <div className="flex  gap-2 text-3xl">
          <button aria-label="done reading" className="hover:text-green-600">
            <InlineIcon icon={'mdi:check-circle'} />
          </button>
          <button aria-label="delete article" className="hover:text-red-600">
            <InlineIcon icon={'mdi:trash'} />
          </button>
        </div>
      </div>
    </div>
  )
}

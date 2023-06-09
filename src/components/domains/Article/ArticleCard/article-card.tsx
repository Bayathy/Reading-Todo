import type { FC } from 'react'

import { InlineIcon } from '@iconify/react'
import dayjs from 'dayjs'

import type { ArticleModel } from '@/components/domains/Article'

import { useDeleteArticle } from '@/components/domains/Article/ArticleCard/api/delete-article'
import { useUpdateArticle } from '@/components/domains/Article/ArticleCard/api/done-article'
export const ArticleCard: FC<ArticleModel> = ({
  title,
  url,
  createdAt,
  id,
}) => {
  const { deleteArticle } = useDeleteArticle()
  const { updateArticle } = useUpdateArticle()

  return (
    <div className="w-80 rounded-2xl border-4 border-black p-4 shadow-xl">
      <div className="h-16">
        <h1 className="line-clamp-2 text-xl font-bold hover:text-blue-500">
          <a href={url}>{title}</a>
        </h1>
      </div>
      <div className="mt-2  flex items-center justify-between">
        <p className="text-xl font-bold leading-none">
          {dayjs(createdAt).month()}
        </p>
        <div className="flex gap-2 text-3xl">
          <button
            onClick={() => updateArticle(id)}
            aria-label="done reading"
            className="hover:text-green-600"
          >
            <InlineIcon icon={'mdi:check-circle'} />
          </button>
          <button
            onClick={() => deleteArticle(id)}
            aria-label="delete article"
            className="hover:text-red-600"
          >
            <InlineIcon icon={'mdi:trash'} />
          </button>
        </div>
      </div>
    </div>
  )
}

import type { FC } from 'react'

import { InlineIcon } from '@iconify/react'

import type { ArticleModel } from '@/components/domains/Article'

import { deleteArticle } from '@/components/domains/Article/ArticleCard/api/delete-article'
import { doneArticle } from '@/components/domains/Article/ArticleCard/api/done-article'
export const ArticleCard: FC<ArticleModel> = ({ url, createdAt, id }) => {
  return (
    <div className="w-80 rounded-2xl border-4 border-black p-4 shadow-xl">
      <div className="h-16">
        <h1 className="line-clamp-2 text-xl font-bold hover:text-blue-500">
          <a href={url}>testTitle</a>
        </h1>
      </div>
      <div className="mt-2  flex items-center justify-between">
        <p className="text-xl font-bold leading-none">{createdAt.getDate()}</p>
        <div className="flex gap-2 text-3xl">
          <button
            onClick={() => deleteArticle(id)}
            aria-label="done reading"
            className="hover:text-green-600"
          >
            <InlineIcon icon={'mdi:check-circle'} />
          </button>
          <button
            onClick={() => doneArticle(id)}
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

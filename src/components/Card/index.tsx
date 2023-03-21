/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react'

import { Icon } from '@iconify/react'

export const Card: FC = () => (
  <div className="flex h-max w-full flex-col justify-start rounded-lg border-2 border-gray-500 p-2 md:w-96">
    <div className="h-[5rem]">
      <h2 className="hover:text-blue-500">
        <a href="/" className="line-clamp-3">
          example article title
        </a>
      </h2>
    </div>
    <div className="flex h-max items-center justify-between border-t-2 pt-2">
      <p>追加日: 2022-12-31</p>
      <div className="flex gap-2">
        <button
          className="text-3xl hover:text-blue-500"
          aria-label="reading done"
        >
          <Icon icon="material-symbols:check-circle-outline" />
        </button>
        <button
          className="text-3xl hover:text-red-500"
          aria-label="delete aricle"
        >
          <Icon icon="material-symbols:delete-outline" />
        </button>
      </div>
    </div>
  </div>
)

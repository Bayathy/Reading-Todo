import type { Meta, StoryObj } from '@storybook/react'

import { ArticleCardList } from '@/components/domains/Article'

const meta: Meta<typeof ArticleCardList> = {
  title: 'domains/ArticleCardList',
  component: ArticleCardList,
}

export default meta

type Story = StoryObj<typeof ArticleCardList>

export const Default: Story = {
  args: {
    articleList: [
      {
        id: 1,
        title: 'Title1',
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2022-12-31T13:50:40+09:00'),
      },
      {
        id: 2,
        title: 'Title2',
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2023-01-01T13:50:40+09:00'),
      },
      {
        id: 3,
        title: 'Title3',
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2022-01-01T13:40:40+09:00'),
      },
      {
        id: 4,
        title: 'Title4',
        url: './',
        done: false,
        userId: 'uuid',
        createdAt: new Date('2021-12-31T13:50:40+09:00'),
      },
    ],
  },
}

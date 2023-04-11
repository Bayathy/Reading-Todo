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
        title: 'TestTitle1',
        url: '/',
        createdAt: new Date('2022-12-31T13:50:40+09:00'),
        deleteFunction: () => {
          console.log('test')
        },
        doneFunction: () => {
          console.log('test')
        },
      },
      {
        id: 1,
        title: 'TestTitle1',
        url: '/',
        createdAt: new Date('2022-12-31T13:50:40+09:00'),
        deleteFunction: () => {
          console.log('test')
        },
        doneFunction: () => {
          console.log('test')
        },
      },
      {
        id: 1,
        title: 'TestTitle1',
        url: '/',
        createdAt: new Date('2022-12-31T13:50:40+09:00'),
        deleteFunction: () => {
          console.log('test')
        },
        doneFunction: () => {
          console.log('test')
        },
      },
    ],
  },
}

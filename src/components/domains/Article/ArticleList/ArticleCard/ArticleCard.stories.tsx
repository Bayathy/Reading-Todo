import type { Meta, StoryObj } from '@storybook/react'

import { ArticleCard } from '@/components/domains/Article/ArticleList/ArticleCard/ArticleCard'

const meta: Meta<typeof ArticleCard> = {
  title: 'domains/ArticleCard',
  component: ArticleCard,
}

export default meta

type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {
  args: {
    title: 'test',
    url: '/',
    createdAt: new Date('2022-12-31T13:50:40+09:00'),
  },
}

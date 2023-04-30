import type { Meta, StoryObj } from '@storybook/react'

import { ArticleCard } from '@/components/domains/Article/ArticleCard/article-card'

const meta: Meta<typeof ArticleCard> = {
  title: 'domains/ArticleCard',
  component: ArticleCard,
}

export default meta

type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {
  args: {
    id: 1,
    url: '/',
    createdAt: '2022-12-31T13:50:40+09:00',
  },
}

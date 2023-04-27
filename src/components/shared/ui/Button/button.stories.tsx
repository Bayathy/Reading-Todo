import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/Button/button'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    onClick: () => console.log('clicked'),
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
    onClick: () => console.log('clicked'),
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    color: 'disabled',
    onClick: () => console.log('clicked'),
  },
}

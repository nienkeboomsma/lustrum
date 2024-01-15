import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

type Story = StoryObj<typeof meta>

const meta = {
  component: Header,
  title: 'Header',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

export const Default: Story = {
  args: {
    addPostFn: async () => {},
    date: '02-01-1900',
    view: 'day',
  },
}

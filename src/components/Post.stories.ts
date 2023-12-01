import type { Meta, StoryObj } from '@storybook/react'
import Post from './Post'
import posts from '../stories/fixtures/posts'

type Story = StoryObj<typeof meta>

const meta = {
  component: Post,
  title: 'Posts/Post',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Post>

export default meta

export const Tiny: Story = {
  args: {
    content: posts['03-01-1900'][0].content,
  },
}

export const Medium: Story = {
  args: {
    content: posts['01-01-1900'][0].content,
  },
}

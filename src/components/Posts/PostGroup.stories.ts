import type { Meta, StoryObj } from '@storybook/react'
import PostGroup from './PostGroup'
import posts from '../../stories/fixtures/posts'

type Story = StoryObj<typeof meta>

const meta = {
  component: PostGroup,
  title: 'Posts/PostGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostGroup>

export default meta

export const OnePost: Story = {
  args: {
    date: '02-01-1900',
    deletePostFn: async () => {},
    editPostFn: async () => {},
    posts: posts['02-01-1900'],
    view: 'day',
  },
}

export const MultiplePosts: Story = {
  args: {
    date: '03-01-1900',
    deletePostFn: async () => {},
    editPostFn: async () => {},
    posts: posts['03-01-1900'],
    view: 'month',
  },
}

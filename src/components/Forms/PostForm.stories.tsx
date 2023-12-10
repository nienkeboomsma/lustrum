import type { Meta, StoryObj } from '@storybook/react'
import PostForm from './PostForm'
import { userEvent, within } from '@storybook/testing-library'
import posts from '../../stories/fixtures/posts'
import PostWrapper from '../Posts/PostWrapper'

type Story = StoryObj<typeof meta>

const meta = {
  component: PostForm,
  title: 'Forms/PostForm',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PostWrapper>
        <Story />
      </PostWrapper>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
} satisfies Meta<typeof PostForm>

export default meta

export const NewPost: Story = {
  args: {},
}

export const EditPost: Story = {
  args: { post: posts['01-01-1900'][0] },
}

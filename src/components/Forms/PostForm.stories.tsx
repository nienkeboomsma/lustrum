import type { Meta, StoryObj } from '@storybook/react'
import PostForm, { PostFormProps } from './PostForm'
import posts from '../../stories/fixtures/posts'
import PostWrapper from '../Posts/PostWrapper'
import { addPost, editPost } from '@/app/actions'

// passing the props directly instead of passing meta so
// that it recognises the discriminating union properly
type Story = StoryObj<PostFormProps>

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
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostForm>

export default meta

const fakeNewAction: typeof addPost = async (content, date, id) => {
  console.table({ content, date, id })
}

const fakeEditAction: typeof editPost = async (postId, content, date, id) => {
  console.table({ postId, content, date, id })
}

export const NewPost: Story = {
  args: {
    action: fakeNewAction,
    onCancel: () => {},
    type: PostForm.FormType.New,
    view: 'day',
  },
}

export const EditPost: Story = {
  args: {
    action: fakeEditAction,
    editablePost: posts['01-01-1900'][0],
    onCancel: () => {},
    type: PostForm.FormType.Edit,
    view: 'month',
  },
}

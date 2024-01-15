import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'
import PostWrapper from '../Posts/PostWrapper'

const meta = {
  component: Alert,
  title: 'Modal/Alert',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PostWrapper>
        <Story />
      </PostWrapper>
    ),
  ],
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const ShortMessage: Story = {
  args: {
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Delete',
    content: 'You will not be able to recover it.',
    onCancel: () => {},
    onContinue: () => {},
    title: 'Delete this post?',
  },
}

export const LongMessage: Story = {
  args: {
    cancelButtonText: 'No thanks',
    confirmButtonText: 'Hell yeah!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pellentesque diam. Phasellus maximus tellus et euismod rutrum. Nam ac blandit ex. Mauris vehicula nibh ac mauris imperdiet, sit amet tincidunt velit commodo. Donec quis orci sit amet neque semper convallis in in libero. Maecenas ut felis rutrum, malesuada turpis in, luctus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi semper massa nunc. Quisque maximus nisi nec mollis feugiat.',
    onCancel: () => {},
    onContinue: () => {},
    title: 'How about some Lorem Ipsum?',
  },
}

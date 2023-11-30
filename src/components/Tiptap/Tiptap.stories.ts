import type { Meta, StoryObj } from '@storybook/react'
import Tiptap from './Tiptap'
import posts from '../../stories/fixtures/posts'

type Story = StoryObj<typeof meta>

const meta = {
  component: Tiptap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tiptap>

export default meta

export const Editable: Story = {
  args: {
    content: posts['03-01-1900'][0].content,
    editable: true,
  },
}

export const InlineFormatting: Story = {
  args: {
    content: posts['01-01-1900'][0].content,
    editable: false,
  },
}

export const Headings: Story = {
  args: {
    content: posts['01-01-1900'][1].content,
    editable: false,
  },
}

export const Lists: Story = {
  args: {
    content: posts['02-01-1900'][0].content,
    editable: false,
  },
}

export const QuoteAndLine: Story = {
  args: {
    content: posts['03-01-1900'][1].content,
    editable: false,
  },
}

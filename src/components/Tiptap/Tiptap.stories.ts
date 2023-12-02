import type { Meta, StoryObj } from '@storybook/react'
import Tiptap from './Tiptap'
import { userEvent, within } from '@storybook/testing-library'
import posts from '../../stories/fixtures/posts'

type Story = StoryObj<typeof meta>

const meta = {
  component: Tiptap,
  title: 'Tiptap/Editor',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tiptap>

export default meta

const editableContent = 'This is some content you can edit.'

export const Editable: Story = {
  args: {
    content: editableContent,
    editable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const editor = await canvas.findByText(editableContent)
    await userEvent.pointer([
      { target: editor, offset: 0, keys: '[MouseLeft>]' },
      { offset: editableContent.length },
    ])
  },
}

export const InlineFormatting: Story = {
  args: {
    content: posts['01-01-1900'][0].content,
    editable: false,
  },
}

export const HeadingsAndQuote: Story = {
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

import type { Meta, StoryObj } from '@storybook/react'
import Tiptap from './Tiptap'
import { useArgs } from '@storybook/preview-api'
import { userEvent, within } from '@storybook/testing-library'
import posts from '../../stories/fixtures/posts'
import { EditorEvents } from '@tiptap/react'

type Story = StoryObj<typeof meta>

const meta = {
  component: Tiptap,
  title: 'Tiptap/Editor',
  parameters: {
    backgrounds: { default: 'White' },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultContent: { control: { disable: true } },
    editable: { control: { disable: true } },
    placeholder: { control: { disable: true } },
  },
} satisfies Meta<typeof Tiptap>

export default meta

const editableContent = 'This is some content you can edit.'

export const Editable: Story = {
  args: {
    defaultContent: editableContent,
    editable: true,
    onUpdate: () => {},
    placeholder: 'How was your day?',
  },
  decorators: [
    (Story, context) => {
      const [, setArgs] = useArgs()

      const onUpdate = (props: EditorEvents['update']): void => {
        setArgs({ defaultContent: props.editor.getJSON() })
      }

      if (!context.args.editable) return <></>

      return (
        <Story
          args={{
            ...context.args,
            onUpdate,
          }}
        />
      )
    },
  ],
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

import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import Datepicker from './Datepicker'
import { userEvent, within } from '@storybook/testing-library'

type Story = StoryObj<typeof meta>

const meta = {
  component: Datepicker,
  title: 'Datepicker',
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [, setArgs] = useArgs()

      const onChange = (date: Date): void => {
        setArgs({ date })
      }

      return <Story args={{ ...context.args, onChange: onChange }} />
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.keyboard('{Tab}')
  },
} satisfies Meta<typeof Datepicker>

export default meta

export const Default: Story = {
  args: {
    date: new Date(),
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import Datepicker from './Datepicker'

type Story = StoryObj<typeof meta>

const meta = {
  component: Datepicker,
  title: 'Datepicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [, setArgs] = useArgs()

      const onChange = (date: Date): void => {
        setArgs({ date })
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
} satisfies Meta<typeof Datepicker>

export default meta

export const Default: Story = {
  args: {
    date: new Date(),
  },
}

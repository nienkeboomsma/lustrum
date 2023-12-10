import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import Button from './Button'
import { userEvent, within } from '@storybook/testing-library'

type Story = StoryObj<typeof meta>

const meta = {
  component: Button,
  title: 'Forms/Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

export const Primary: Story = {
  args: {
    children: 'submit',
    intent: Button.Intent.Primary,
    shadow: false,
    shape: Button.Shape.Rectangle,
    size: Button.Size.Medium,
  },
  parameters: { backgrounds: { default: 'White' } },
}

export const Secondary: Story = {
  args: {
    children: 'cancel',
    intent: Button.Intent.Secondary,
    shadow: true,
    shape: Button.Shape.Lozenge,
    size: Button.Size.Large,
  },
}

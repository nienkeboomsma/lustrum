import type { Meta, StoryObj } from '@storybook/react'
import PostDate from './PostDate'
import posts from '../../stories/fixtures/posts'

type Story = StoryObj<typeof meta>

const meta = {
  component: PostDate,
  title: 'Posts/PostDate',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostDate>

export default meta

export const DayView: Story = {
  args: {
    view: 'day',
    date: '02-01-1900',
  },
}

export const MonthView: Story = {
  args: {
    view: 'month',
    date: '02-01-1900',
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import Text from '.'

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Hello World!',
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const DefaultText: Story = {
  args: {
    size: 'md',
    color: 'black',
    weight: 'normal',
  },
}

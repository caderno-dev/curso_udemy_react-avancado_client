import { StoryFn, Meta } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />

Basic.args = {
  title: 'Click here',
  children: 'content'
}

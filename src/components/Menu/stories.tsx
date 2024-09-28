import { StoryFn, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<MenuProps> = (args) => <Menu {...args} />

export const Logged: StoryFn<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  username: 'John Doe'
}

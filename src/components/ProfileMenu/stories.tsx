import { StoryFn, Meta } from '@storybook/react'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

export const Basic: StoryFn<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)

import { StoryFn, Meta } from '@storybook/react'
import Profile from '.'

export default {
  title: 'Profile',
  component: Profile
} as Meta

export const Basic: StoryFn = () => <Profile />

import { StoryFn, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: StoryFn<LogoProps> = (args) => <Logo {...args} />

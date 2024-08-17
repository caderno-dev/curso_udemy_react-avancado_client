import { StoryFn, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Basic: StoryFn<EmptyProps> = (args) => <Empty {...args} />

Basic.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}

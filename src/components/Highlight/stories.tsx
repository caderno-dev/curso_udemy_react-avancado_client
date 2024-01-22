import { StoryFn, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead its back',
    subtitle: 'Come see Jonhs new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: StoryFn<HighlightProps> = (args) => <Highlight {...args} />

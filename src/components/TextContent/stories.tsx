import { StoryFn, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<TextContentProps> = (args) => (
  <TextContent {...args} />
)

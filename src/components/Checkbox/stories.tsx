import { StoryFn, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

export const Basic: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />

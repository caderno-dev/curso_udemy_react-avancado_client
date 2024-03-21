import { StoryFn, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: StoryFn<CheckboxProps> = (args) => (
  <Checkbox isChecked {...args} />
)

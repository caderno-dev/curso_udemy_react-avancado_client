import { StoryFn, Meta } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'FormSignUp',
  component: FormSignUp
} as Meta

export const Basic: StoryFn = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
)

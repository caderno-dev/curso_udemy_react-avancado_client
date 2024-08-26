import { StoryFn, Meta } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  }
} as Meta

export const Basic: StoryFn<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)

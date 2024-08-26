import { StoryFn, Meta } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)

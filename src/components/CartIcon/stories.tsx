import { StoryFn, Meta } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn = () => <CartIcon />
export const WithItems: StoryFn<CartIconProps> = (args) => (
  <CartIcon {...args} />
)

WithItems.args = {
  quantity: 3
}

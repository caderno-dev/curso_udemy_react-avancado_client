import { StoryFn, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)

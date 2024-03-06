import { Meta } from '@storybook/react'
import { GameCardProps } from 'components/GameCard'

import GameCardSlider from '.'

import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default = {
  render: (args: GameCardProps[]) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto ' }}>
      <GameCardSlider items={args} {...args} />
    </div>
  ),
  args: { items }
}

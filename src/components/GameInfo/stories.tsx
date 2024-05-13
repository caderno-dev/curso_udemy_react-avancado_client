import { StoryFn, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'

import mockGame from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame
} as Meta

export const Basic: StoryFn<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

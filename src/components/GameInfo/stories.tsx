import { StoryFn, Meta } from '@storybook/react'
import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Basic: StoryFn = () => <GameInfo />

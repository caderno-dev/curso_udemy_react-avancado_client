import { StoryFn, Meta } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'GameDetails',
  component: GameDetails
} as Meta

export const Basic: StoryFn = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails platforms={['windows', 'linux', 'mac']} />
  </div>
)

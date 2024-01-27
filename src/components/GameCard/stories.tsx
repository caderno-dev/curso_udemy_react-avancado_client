import { StoryFn, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    price: 'R$ 245,00',
    promotionalPrice: 'R$ 200,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

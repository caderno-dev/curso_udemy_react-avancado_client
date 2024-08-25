import { StoryFn, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Basic: StoryFn<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: StoryFn<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/2323213'
}

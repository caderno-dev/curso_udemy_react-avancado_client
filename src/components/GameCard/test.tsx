import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import GameCard from '.'

const props = {
  title: 'Red Dead Redemption',
  developer: 'Rockstar',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 245,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-throught in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})

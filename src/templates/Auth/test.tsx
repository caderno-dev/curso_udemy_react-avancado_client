import { render, screen } from '@testing-library/react'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )
  })
})

import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('renders with label', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />)
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  it('renders without label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('is accessible by tab', async () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    await waitFor(() => userEvent.tab())
    expect(input).toHaveFocus()
  })

  it('renders with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders with icon on the right side', () => {
    renderWithTheme(
      <TextField iconPosition="right" icon={<Email data-testid="icon" />} />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1
    })
  })
})

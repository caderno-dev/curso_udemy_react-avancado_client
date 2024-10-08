import Link from 'next/link'
import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref legacyBehavior>
                <S.MenuLink>My profile</S.MenuLink>
              </Link>
              <Link href="/profile/wishlist" passHref legacyBehavior>
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in">
              <Button fullWidth size="large">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <S.CreateAccount>
              <Link href="/sign-up">Sign up</Link>
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu

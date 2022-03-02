import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLinkWrapper tabIndex="0" >
            <NavLink tabIndex="-1" href="/sale">Sale</NavLink>
            <NavLink tabIndex="-1" href="/sale">Sale</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper tabIndex="0" >
            <NavLink tabIndex="-1" href="/new">New&nbsp;Releases</NavLink>
            <NavLink tabIndex="-1" href="/new">New&nbsp;Releases</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper tabIndex="0" >
            <NavLink tabIndex="-1" href="/men">Men</NavLink>
            <NavLink tabIndex="-1" href="/men">Men</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper tabIndex="0" >
            <NavLink tabIndex="-1" href="/women">Women</NavLink>
            <NavLink tabIndex="-1" href="/women">Women</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper tabIndex="0" >
            <NavLink tabIndex="-1" href="/kids">Kids</NavLink>
            <NavLink tabIndex="-1" href="/kids">Kids</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper tabIndex="0" >
            <NavLink tabIndex="-1" href="/collections">Collections</NavLink>
            <NavLink tabIndex="-1" href="/collections">Collections</NavLink>
          </NavLinkWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const NavLinkWrapper = styled.div`
  overflow: hidden;
  color: var(--color-gray-900);
  height: 2rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  font-weight: ${WEIGHTS.medium};
  transform: translateY(0%);
  transition: transform 500ms;
  color: inherit;

  // For reduced motion users
  ${NavLinkWrapper}:hover & {
    font-weight: ${WEIGHTS.bold};
  }

  @media (prefers-reduced-motion: no-preference) {
    font-weight: ${WEIGHTS.medium};
    ${NavLinkWrapper}:focus &, 
    ${NavLinkWrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 150ms ease-out;
    }
  }

  &:nth-of-type(2) {
    font-weight: ${WEIGHTS.bold};
  }
`;

export default Header;

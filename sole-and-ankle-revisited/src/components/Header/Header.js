import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
        <Icon id="shopping-bag" strokeWidth={2} size={20} />
        <Icon id="search" strokeWidth={2} size={20} />
        <Icon id="menu" onClick={() => setShowMobileMenu(true)}/>
        </MobileNav>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </HeaderWrapper>
  );
};
const MobileNav = styled.div`
  display: flex;
  gap: 60px;
  @media ${props => props.theme.queries.phoneAndDown} {
    gap: 20px;
  }
  justify-content: space-between;
  align-items: center;
`

const HeaderWrapper = styled.header`
  & > div:first-child {
    display: flex
  }
  & > div:nth-child(2) {
    display: flex
  }
  
  @media ${props => props.theme.queries.tabletAndDown} {
    border-top: solid 4px;
    & > div:first-child {
      display: none;
    }
  & > div:nth-child(3) {
    display: flex
  }
  }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media ${props => props.theme.queries.phoneAndDown} {
    padding: 20px 19px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${props => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

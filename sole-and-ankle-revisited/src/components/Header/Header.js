import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <HeaderWrapper>
      <SuperHeaderFilter>
        <SuperHeader />
      </SuperHeaderFilter>
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">a vendre</NavLink>
          <NavLink href="/new">nouvelles</NavLink>
          <NavLink href="/men">hommes</NavLink>
          <NavLink href="/women">femmes</NavLink>
          <NavLink href="/kids">les enfants</NavLink>
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

const SuperHeaderFilter = styled.div`
  @media ${props => props.theme.queries.tabletAndDown} {
    border-top: solid 4px;
    display: none;
  }
`

const MobileNav = styled.div`
  display: none;

  @media ${props => props.theme.queries.tabletAndDown} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
  }

  @media ${props => props.theme.queries.phoneAndDown} {
    gap: 20px;
  }
`

const HeaderWrapper = styled.header`
  @media ${props => props.theme.queries.tabletAndDown} {
    border-top: solid 4px;
  }
`

const MainHeader = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: baseline;
  padding: 18px 0 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  @media ${props => props.theme.queries.phoneAndDown} {
    padding: 20px 19px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9vw - 3.75rem,
    5rem
  );
  margin: 0 0 0 48px;

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
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  min-width: max-content;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;

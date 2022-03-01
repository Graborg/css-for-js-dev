/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {keyframes} from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss} style={{
      '--fade-in-backdrop-duration': "350ms",
      '--slide-in-duration': "4500ms",
      '--fade-in-text-duration': "250ms"
    }}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay >
  );
};

const fadeBackdrop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`
const slideInMenu = keyframes`
  from {
    transform: rotateY(-90deg) ;
  }
  to {
    transform: rotateY(0) ;
  }
`
const fadeInItems = keyframes`
  from {
    transform: translateX(30%);
    opacity: 0; 
  }
  to {
    opacity: 100%; 
    transform: translateX(0);
  }
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeBackdrop} var(--fade-in-backdrop-duration);
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-origin: center right; 
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideInMenu} var(--slide-in-duration) cubic-bezier(.02,.73,.3,1.04) both;
    animation-delay: calc(var(--fade-in-backdrop-duration) - 100ms);
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;


const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeInItems} calc(var(--fade-in-text-duration) * var(--index)) ease both;
    animation-delay: var(--fade-in-backdrop-duration);
  }
  

  &:first-of-type {
    color: var(--color-secondary);
  }

  :nth-of-type(1) {
    --index: 1;
  }
  :nth-of-type(2) {
    --index: 2;
  }
  :nth-of-type(3) {
    --index: 3;
  }
  :nth-of-type(4) {
    --index: 4;
  }
  :nth-of-type(5) {
    --index: 5;
  }
  :nth-of-type(6) {
    --index: 6;
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;

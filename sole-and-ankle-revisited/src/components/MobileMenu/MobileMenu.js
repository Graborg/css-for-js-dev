/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <CloseButton onClick={onDismiss}>
        <Icon aria-hidden id="close" size={20} />
        <VisuallyHidden>Close</VisuallyHidden>
      </CloseButton>
      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
    </Wrapper>
  );
};
const Nav = styled.nav`
  & a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    line-height: 21px;
    font-weight: 500;
  }
  & a:first-child {
    color: ${COLORS.secondary} ;
  }
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: auto;
`

const Footer = styled.footer`
  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

const CloseButton = styled.button`
  background: white;
  border: none;
  position: absolute;
  top: 32px;
  right: 22px;
`

const Wrapper = styled.div`
  box-shadow: -120px -1px 0 1px rgba(96, 100, 108, 0.8);
  position: fixed;
  right: 0;
  top: 0;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: white;
  z-index: 2;
  height: 100vh;
  padding-left: 32px;
  padding-bottom: 32px;
`

export default MobileMenu;

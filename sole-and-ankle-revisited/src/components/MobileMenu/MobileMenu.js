/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="mobilemenu">
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
      </Content>
    </Overlay>
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
    color: var(--color-secondary);
  }
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: auto;
`

const Footer = styled.footer`
  & a {
    text-decoration: none;
    color: var(--color-gray-700);
  }
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

const CloseButton = styled.button`
  background: white;
  border: none;
  position: absolute;
  top: 28px;
  right: 22px;
`

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  padding-left: 32px;
  padding-bottom: 32px;
  background: white;
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--color-backdrop); 
`

export default MobileMenu;

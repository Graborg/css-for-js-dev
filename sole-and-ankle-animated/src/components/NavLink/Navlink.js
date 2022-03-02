
import React from 'react';
import styled from 'styled-components';

import {WEIGHTS} from '../../constants';

const NavLink = ({children, ...delegated}) => {
  return (
    <Wrapper tabIndex="0" {...delegated}>
      <Text tabIndex="-1" >{children}</Text>
      <Text tabIndex="-1" >{children}</Text>
    </Wrapper>
  );
};


const Wrapper = styled.a`
  overflow: hidden;
  will-change: transform;
  text-decoration: none;
  color: var(--color-gray-900);
  height: 2rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`
const Text = styled.span`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  font-weight: ${WEIGHTS.medium};
  transition: transform 500ms;

  // For reduced motion users
  ${Wrapper}:focus &,
  ${Wrapper}:hover & {
    font-weight: ${WEIGHTS.bold};
  }

  @media (prefers-reduced-motion: no-preference) {
    font-weight: ${WEIGHTS.medium};
    ${Wrapper}:focus &, 
    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 150ms ease-out;
    }
  }

  &:nth-of-type(2) {
    font-weight: ${WEIGHTS.bold};
  }
`;
export default NavLink;

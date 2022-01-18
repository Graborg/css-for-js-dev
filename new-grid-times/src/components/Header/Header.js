import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES, WEIGHTS, COLORS} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeActionGroup>
          <Button >
            subscribe
          </Button>
          <a href="">
            Already a subscriber?
          </a>
        </SubscribeActionGroup>
      </MainHeader>
    </header >
  );
};

const SuperHeader = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;
const SubscribeActionGroup = styled(ActionGroup)`
  padding-top: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 2px;
  & > a {
    font-style: italic;
    font-weight: 200;
    font-size: 0.8rem;
    color: ${COLORS.gray[900]};
    text-decoration-line: underline;
  }
  `

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

  & ${ActionGroup} {
    display: none;
  }
  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    & ${ActionGroup} {
      display: flex;
    }
  }
`;

export default Header;

import React from 'react';
import styled from 'styled-components/macro';

import {MARKET_DATA, SPORTS_STORIES} from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from '../../constants'

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 64px;

  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding-top: 24px;
`;

const SportsSection = styled.section`
  overflow: hidden;

  @media ${QUERIES.laptopAndUp}{
    padding-left: 16px;
    margin-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  padding-top: 24px;

  @media ${QUERIES.tabletAndUp}{
    grid-template-columns: revert;
    display: flex;
    overflow: auto;
  }
`;

export default SpecialtyStoryGrid;

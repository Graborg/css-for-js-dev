import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionWrapper>
        <OpinionSection>
          <SectionTitle>Opinion</SectionTitle>
          <StoryList>
            {OPINION_STORIES.map((story, index) => (
              <OpinionStory key={story.id} {...story} />
            ))}
          </StoryList>
        </OpinionSection>
      </OpinionWrapper>

      <AdWrapper>
        <AdvertisementSection>
          <Advertisement />
        </AdvertisementSection>
      </AdWrapper>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story' 
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr; 
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 9fr 6fr 4fr;
    grid-template-rows: 1fr; 
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }

  margin-bottom: 48px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  padding-right: 24px;
  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  padding-left: 24px;
  padding-right: 16px;
  padding-bottom: 16px;
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionWrapper = styled.div`
  grid-area: opinion-stories;
  padding-bottom: 16px;
`
const OpinionSection = styled.section`
  padding-bottom: 16px;
  padding-left: 16px;
  @media ${QUERIES.tabletOnly} {
    padding: 4px;
      & ${StoryList} {
        flex-direction: row;
        padding: 0 4px;
      }
  }
  
  @media ${QUERIES.laptopAndUp} {
    border-left: 1px solid var(--color-gray-300);
  }
`;

const AdWrapper = styled.div`
  grid-area: advertisement;
  padding-left: 16px;
`

const AdvertisementSection = styled.section`
  padding-top: 16px;
  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;

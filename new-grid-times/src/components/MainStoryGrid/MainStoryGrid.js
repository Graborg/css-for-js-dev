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
            <SecondStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </SecondStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionWrapper>
        <OpinionSection>
          <SectionTitle>Opinion</SectionTitle>
          <OpinionStoryList>
            {OPINION_STORIES.map((story, index) => (
              <OpinionStoryWrapper key={story.id}>
                <OpinionStory {...story} />
              </OpinionStoryWrapper>
            ))}
          </OpinionStoryList>
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

const VerticalStoryWrapper = styled.div`
  flex: 1;
  padding-top: 16px;

  &:not(:first-child) {
    border-top: 1px solid var(--color-gray-300);
  }
`

const SecondStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletAndUp} {
    &:first-child{
      padding-top: revert;
    }
    &:not(:first-child) {
      border-top: 1px solid var(--color-gray-300);
    }
  }
`

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    padding: 0 4px;
    &:not(:first-child) {
      border: revert;
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas:
    'main-story' 
    'secondary-stories'
    'opinion-stories'
    'advertisement';

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 0;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr; 
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }

  margin-bottom: 48px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp}{
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`

const OpinionWrapper = styled.div`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    border-left: 1px solid var(--color-gray-300);
    margin-bottom: 16px;
  }
`
const OpinionSection = styled.section`
  padding: 0 4px;
  
  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const AdWrapper = styled.div`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`

const AdvertisementSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;

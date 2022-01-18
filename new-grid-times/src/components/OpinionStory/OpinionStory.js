import React from 'react';
import styled from 'styled-components/macro';
import {QUERIES} from '../../constants';

const OpinionStory = ({id, title, author, avatar}) => {
  return (
    <OpinionLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </OpinionLink>
  );
};
const OpinionLink = styled.a`
  flex: 1;

`

const Wrapper = styled.article`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  color: var(--color-gray-900);
  display: flex;
  
  @media ${QUERIES.tabletOnly} {
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  width: 90%;
`;

export default OpinionStory;

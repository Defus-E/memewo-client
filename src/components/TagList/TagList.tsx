import React, { FC } from 'react';

import { StyledWrapper } from 'components/App/Wrapper';

import { StyledTagItem, StyledTagLink, StyledTagList } from './styles';

const TagList: FC = () => {
  const names = ['Pokémon', '#MOTHER', '#Animation', '#3DCG', '#Practice', 'rabbit', 'beautiful girl'];
  const tagList = Array.from({ length: 7 }, (e, i) => ({
    name: names[i],
    cover: `https://picsum.photos/300/300?random=${i + 1}`,
  }));

  return (
    <StyledWrapper
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
      }}
      data-uk-sticky="offset: 64px:top:64;animation: uk-animation-slide-bottom-small"
    >
      <StyledTagList>
        {tagList.map((tag, i) => (
          <StyledTagItem key={i} coverUrl={tag.cover}>
            <StyledTagLink href="/#">{tag.name}</StyledTagLink>
          </StyledTagItem>
        ))}
      </StyledTagList>
    </StyledWrapper>
  );
};

export default TagList;

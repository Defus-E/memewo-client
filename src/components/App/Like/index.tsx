import React from 'react';

import { StyledLike, StyledLikeWrap } from './styles';

const Like: React.FC = () => (
  <StyledLike>
    <input type="checkbox" />
    <StyledLikeWrap>
      <i data-uk-icon="like-0" />
      <i data-uk-icon="like-1" />
    </StyledLikeWrap>
  </StyledLike>
);

export default Like;

import styled from 'styled-components';

export const StyledLike = styled.label`
  width: 20px;
  height: 20px;

  input[type='checkbox'] {
    display: none;
  }
`;

export const StyledLikeWrap = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  cursor: pointer;

  &:hover i {
    color: #0065ff;
  }

  > i {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.2s ease-in-out 0s;

    &:nth-child(1) {
      opacity: 1;
    }

    &:nth-child(2) {
      opacity: 0;
    }
  }
`;

import { CSSProperties } from 'react';

import styled from 'styled-components';

interface BlockLineProps {
  flexDirection?: CSSProperties['flexDirection'];
}

export const StyledBody = styled.div`
  width: 100%;
  display: flex;

  > div {
    width: 50%;
    padding: 60px;
    display: flex;
    flex-direction: column;

    &.left {
      padding-right: 30px;
    }

    &.right {
      padding-left: 30px;
    }
  }
`;

export const StyledBlocks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBlockLine = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: ${({ flexDirection }: BlockLineProps) => flexDirection || 'unset'};

  .label {
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;

    span {
      font: 400 12px/150% 'Roboto', Arial;
      padding-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #bbb;
      cursor: pointer;
      margin-left: 10px;

      &:hover {
        color: #fff;
      }
    }
  }
`;

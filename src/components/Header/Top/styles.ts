import styled from 'styled-components';

export const StyledTopHeader = styled.div`
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  position: fixed;
  height: 64px;
  background: #151515;

  && {
    width: 100%;
  }
`;

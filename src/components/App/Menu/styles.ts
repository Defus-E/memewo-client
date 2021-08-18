import styled from 'styled-components';

export const StyledMenuList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StyledMenuItem = styled.li`
  width: 64px;
  height: 64px;
  background: 0 0;

  &:hover {
    background: #2d2d2c;
  }

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #fff;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

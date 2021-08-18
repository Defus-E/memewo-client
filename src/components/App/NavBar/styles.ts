import styled from 'styled-components';

interface NavProfileItemProps {
  active?: boolean;
}

export const StyledNavBar = styled.nav`
  display: flex;
  heigth: inherit;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

export const StyledNavList = styled.ul`
  height: inherit;
  display: flex;
  align-items: center;
`;

export const StyledNavProfileList = styled.ul`
  padding: 20px 0 40px;
  display: flex;
  align-items: center;
`;

export const StyledNavProfileItem = styled.li`
  margin-right: 20px;

  a {
    font: 400 12px/120% 'Ubuntu', Arial;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0.6;

    ${({ active }: NavProfileItemProps) =>
      active &&
      `
      opacity: 1;
      color: #0065ff;
    `}

    &:hover {
      opacity: 1;
    }
  }
`;

export const StyledNavItem = styled.li`
  margin: 0 2px;
  padding: 0 30px;
  height: inherit;

  &:hover {
    background: #2d2d2c;
  }

  a {
    width: 100%;
    height: inherit;
    font: 600 11px/150% 'Ubuntu', Arial;
    color: #fff;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

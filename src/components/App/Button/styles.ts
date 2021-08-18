import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  clear?: boolean;
  auth?: boolean;
  def?: boolean;
  loadmore?: boolean;
}

const gradientRotate = keyframes`
  0% {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

export const StyledButton = styled.button.attrs((props) => ({ ...props }))`
  border: 0;
  padding: 15px 20px;
  font: 400 11px/150% 'Ubuntu', Arial;
  letter-spacing: 1.5px;
  color: #fff;

  ${({ def }: ButtonProps) =>
    def &&
    `
    background: #2d2d2c;

    &:hover {
      background: #3c3e3e;
    }
  `}

  ${({ clear }: ButtonProps) =>
    clear &&
    `
    background: transparent;

    &:hover {}
  `}

  ${({ auth }: ButtonProps) =>
    auth &&
    `
    margin: 0 20px;
  `}

  ${({ primary }: ButtonProps) =>
    primary &&
    `
    &,
    &::before {
      position: relative;
      background-image: linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff, #0065ff, #6942ef);
      background-size: 400%;
      background-position: 0 0
    }

    &::before {
      content: '';
      position: absolute;
      left: -2px;
      top: -2px;
      right: -2px;
      bottom: -2px;
      filter: blur(10px);
      opacity: 0;
      z-index: -1;
      transition: opacity .2s
    }
  `}

  ${(props: ButtonProps) =>
    Object.keys(props).length !== 0 &&
    css`
      &:hover {
        animation: ${gradientRotate} 2s infinite;
      }
    `}

  ${({ loadmore }) => loadmore && `background: #1e1e1e;`}
`;

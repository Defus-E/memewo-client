import styled from 'styled-components';

interface WrapperProps {
  workSwitcher?: boolean;
}

export const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ workSwitcher }: WrapperProps) =>
    workSwitcher &&
    `
    > div {
      width: calc(100%/3)
    }

    .cats {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        margin: 0;
        position: relative;
      
        a {
          padding: 5px 10px;
          font: 500 11px/150% 'Ubuntu', Arial;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
          opacity: .8;
        }

        &.active {
          background: #2d2d2c;
        }

        &:hover a {
          opacity: 1;
        }
      }
    }
  `}
`;

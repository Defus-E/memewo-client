import styled from 'styled-components';

export const StyledDailyRating = styled.footer`
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;

  .footer-bottom {
    width: 100%;
    height: 64px;
    background: #151515;
  }
`;

export const StyledCopyRight = styled.div`
  font: 400 10px/150% 'Ubuntu', Arial;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  .links {
    margin-left: 10px;

    a {
      font-size: 9px;
      margin-right: 5px;
      color: #fff;
      opacity: 0.7;
      position: relative;

      &:after {
        margin-left: 5px;
        content: '|';
      }

      &:hover {
        opacity: 1;
      }

      &:last-child::after {
        display: none;
      }
    }
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogo = styled(Link).attrs(() => ({ to: '/' }))`
  margin: 0 20px;
  width: 120px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font: 600 14px/150% 'Roboto', Arial;
    letter-spacing: 2px;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff, #0065ff, #6942ef);
    background-size: 500%;
    background-position: 0 0;
  }
`;

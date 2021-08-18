import Packery from 'components/App/Packery';
import styled from 'styled-components';

export const StyledWorkList = styled(Packery)`
  display: flex;
  flex-wrap: wrap;

  :before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 100%;
  }

  :after {
    content: '';
    display: table;
    clear: both;
  }
`;

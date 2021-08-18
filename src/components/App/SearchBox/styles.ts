import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  position: relative;
  margin: 0 20px;
  width: 100%;
`;

export const StyledSearchButton = styled.button.attrs(() => ({
  'data-uk-icon': 'search',
}))`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;

  svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }
`;

export const StyledSearchInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Поиск...',
}))`
  padding: 14px 15px 14px 50px;
  width: inherit;
  background-color: #2d2d2c;
  border: 0;

  ::placeholder {
    font: 400 12px/150% 'Roboto', Arial;
    color: #fff;
    text-transform: uppercase;
  }
`;

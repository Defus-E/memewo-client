import Tagify from '@yaireo/tagify/dist/react.tagify';
import styled from 'styled-components';

import '@yaireo/tagify/dist/tagify.css';

interface InputProps {
  maxLength?: string | number;
}

const inputCss = `
  border-radius: 0;
  background: #2d2d2c;
  border: 2px solid #2d2d2c;
  color: #fff;
  padding: 5px 10px;
  font: 400 14px/150% 'Roboto', Arial;
  letter-spacing: 0;
  position: relative;

  ${({ maxLength }: InputProps) => maxLength && 'position: relative;'}

  &:active,
  &:focus {
    background: #2d2d2c;
  }
  
  &::placeholder {
    color: #fff;
    letter-spacing: 0px;
    opacity: .7;
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;

  &:after {
    content: attr(data-remaining) ' / ' attr(data-limit);
    display: inline-block;
    position: absolute;
    bottom: 1px;
    right: 1px;
    padding: 0.25ex 0.5ex;
    pointer-events: none;
    color: #fff;
    opacity: 0.7;
    font-size: 0.8em;
  }
`;

export const TagifiedInput = styled(Tagify).attrs(({ placeholder }) => ({
  settings: { placeholder },
}))`
  ${inputCss}

  &:hover {
    border-color: #2d2d2c !important;
  }

  > span {
    opacity: 0.7;

    &:focus:empty::before {
      color: #fff;
    }

    &::before,
    &::after {
      color: #fff;
      letter-spacing: 0px;
      opacity: 0.7;
      font-size: 12px;
      text-transform: uppercase;
    }
  }
`;

export const StyledInput = styled.input`
  ${inputCss}
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  ${inputCss}

  &:active,
  &:focus {
    outline: none;
  }
`;

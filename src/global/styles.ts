import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  *,
  li,
  ul {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li,
  ul {
    list-style-type: none;
  }

  a,
  a:hover {
    text-decoration: none !important;
  }

  button {
    border: 0;
  }

  button:hover {
    cursor: pointer;
  }

  html {
    overflow-x: hidden;
    background: #151515;
  }

  body {
    font: 400 16px/150% 'Roboto', Arial;
    overflow: hidden;
    color: #fff;
  }

  svg {
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .uk-icon>* {
    transform: translate(0,0);
  }

  .uk-invisible {
    opacity: 0;
  }

  .uk-checkbox:not(:disabled), .uk-radio:not(:disabled) {
    cursor: pointer;
  }
  
  .uk-radio {
    padding: 4px;
  }
  
  .uk-radio {
    border-radius: 50%;
  }

  .uk-checkbox, .uk-radio {
    display: inline-block;
    height: 16px;
    width: 16px;
    overflow: hidden;
    margin-top: -4px;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 1px solid #ccc;
    transition: .2s ease-in-out;
    transition-property: background-color,border;
  }

  button.uk-icon:not(:disabled) {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #0065ff;
    border: 0 #fff;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    animation: gradientRotate 2s infinite;
  }

  ::-webkit-scrollbar-track {
    border-radius: 50px;
    background: #151515;
  }

  ::-webkit-scrollbar-corner {
    background: 0 0;
  }
`;

export default globalStyle;

import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  @keyframes gradientRotate {
    0% {
      background-position: 0 0
    }

    to {
      background-position: 100% 100%
    }
  }

  :root {
    --powered_by: "ReFroge.digital";
    --font1: 'Roboto', Arial;
    --font2: 'Ubuntu', Arial;
    --contests-height-item: 120px;
    --header-height: 128px;
    --work-size: 360px;
    --slider-height: 360px;
    --color1: #151515;
    --color2: #fff;
    --color3: #2d2d2c;
    --color4: #1e1e1e;
    --color5: #0065ff;
    --color6: #3c3e3e;
    --color7: #bbb;
    --color8: green;
    --color9: maroon;
    --placeholder-color: var(--color2)
  }
  
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
    text-decoration: none;
  }

  button {
    border: 0;
  }

  button:hover {
    cursor: pointer;
  }

  html {
    overflow-x: hidden;
    background: var(--color1);
  }

  body {
    font: 400 16px/150% 'Roboto', Arial;
  }
`;

export default globalStyle;

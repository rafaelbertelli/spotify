import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #181818;
    color: #FFF;
    cursor: default;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
    user-select: none;
    -moz-osx-font-smoothing: grayscale !important;
    -webkit-font-smoothing: antialiased !important;
  }

  a, button {
    cursor: pointer;
  }

  /**
  * Scrollbar
  * @font: https://css-tricks.com/custom-scrollbars-in-webkit/
  */
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

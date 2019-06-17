import { createGlobalStyle } from 'styled-components';

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
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale !important;
    -webkit-font-smoothing: antialiased !important;
  }

  a, button {
    cursor: pointer;
  }
`;

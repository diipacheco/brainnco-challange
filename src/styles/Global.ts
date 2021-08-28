import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--grey);
  }
  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    background: var(--background);
  }
  :root {
    --white: #ffffff;
    --grey: #333333;
    --background: #EFEFEF;
    --black: #000000;
    --green-light: #6BEFA3;
    --purple-dark: #8666EF;
    --purple-light: #DD7AC6;
    --orange: #FFAB64;
    --green-dark: #5AAD7D;
    --yellow-ocre: #BFAF83;
  }
`;

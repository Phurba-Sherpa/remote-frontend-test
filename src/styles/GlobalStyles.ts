import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    /* Blue */
    --color-brand-500: #1F4782;
    --color-brand-600: #2B4877;
   
    /* Grey */

    --color-grey-0: #fff;
    --color-grey-50: #FBFBFB;
    --color-grey-200: #F4F4F4;
    --color-grey-400: #C7C7C7;
    --color-grey-700: #4D4C4C;

    /* width */
    --border-width-xs: .5px;
    --border-width-sm: 1px;

    /* border */
    --border-radius-md: 5px;
}
  
////////////////////
/* BASIC RESET */
////////////////////
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  

  //////////////////////
  /* GENERAL STYLE */
  //////////////////////
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: "Noto Sans", sans-serif;
    color: var(--color-grey-700);
    background-color: var(--color-grey-50);
  
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.5rem;
  }
  `;

export default GlobalStyles;

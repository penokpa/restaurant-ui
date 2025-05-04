import { createGlobalStyle, css } from "styled-components";

import { mediaQuery } from "./utils";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: "SoftCafe Sym SC";
    font-style: italic;
    font-weight: 400 900;
    font-display: swap;
    src: url(https://s3.amazonaws.com/imenupro-fonts/SoftSym.woff)
      format("woff2");
  }

  body {
    background-color: ${theme.color.white["100"]};
    overflow-x: hidden;
    font-family: ${theme.font.defaultSystemTheme};
    width: 100%;

    &.menu-open {
      height: 100vh;
      overflow: hidden;
    }

    .feature-image-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  a {
    text-decoration: none;
  }

  .overflow-hidden {
    height: 100vh;
    overflow: hidden;
  }

  .food-icon {
    font-family: ${theme.font.SoftCafe};
    font-weight: 400;
    font-style: normal;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    letter-spacing: 0;
    margin-right: 8px;
    line-height: 0.5;
    text-transform: none;
    font-size: 30px;
    display: inline-flex;

    ${mediaQuery("md")} {
      font-size: 24px;
    }
  }
`}

 
`;

import { createGlobalStyle } from "styled-components";
import theme from "./theme";

import "./fonts/fonts.css";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "${theme.fonts.family.regular}", Arial;
    font-weight: normal;
    font-style: normal;
    color: ${theme.colors.TEXT};
  }

  body {
    margin: 0;
    background-color: ${theme.colors.LIGHT_BACKGROUND};
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
`;

export default GlobalStyles;

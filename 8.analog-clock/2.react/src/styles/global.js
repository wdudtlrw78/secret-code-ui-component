import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans';
    font-weight: 300;
    background-color: #d6e1e5;
  }
`;

export default GlobalStyles;

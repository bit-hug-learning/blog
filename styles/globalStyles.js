import { createGlobalStyle } from 'styled-components';
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: ${theme.dark.secondary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;

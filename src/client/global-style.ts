import { createGlobalStyle } from "styled-components";
import COLORS from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "UhBeenamsoyoung";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeenamsoyoung.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'UhBeeYeonie';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeYeonie.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  }

body {
    margin: 1rem 3rem;
    text-align: center;
    background-color: ${COLORS.dark};
    color: ${COLORS.light};
    font-family: UhBeeYeonie, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

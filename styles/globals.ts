import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
html,body {
  padding: 0;
  margin: 0;
  font-family: sans-serif, 'Montserrat';
  overflow: hidden;
  height: 100%;
}

button {
  border: none;
}

/* @media (min-width:480px){} */
`;

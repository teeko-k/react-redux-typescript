import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
/* Normalize */
${normalize}

/* Add your styles here */
*{
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
}
`;

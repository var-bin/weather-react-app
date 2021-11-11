import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Show it is fixed to the top
  body {
    min-height: 75rem;
    padding-top: 4.5rem;
  }

  svg {
    font-size: 4.8em;
  }

  h5, .h5 {
    letter-spacing: -.06rem;
  }

  h6, .h6 {
    letter-spacing: .1rem;
  }
`
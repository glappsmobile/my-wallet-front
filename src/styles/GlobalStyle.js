import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.color.primary};
      font-family: ${theme.font.family};
    }

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

    svg {
      cursor: pointer;
    }

    strong {
      font-weight: bold;
    }
  `}
`;

export default GlobalStyle;

import { css } from '@emotion/react';

import { color } from '@/styles/theme';
import BiennaleFont from '@/styles/fonts';

const { primary, textPrimary } = color;

const reset = css`
  ${BiennaleFont};

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    font-family: Biennale, Helvetica Neue, sans-serif;
    height: 100%;
    font-size: 62.5%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    color: ${textPrimary};
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button {
    font-family: Biennale, Helvetica Neue, sans-serif;
    // Rich text will inherit from parent component (Typography)
    font-size: inherit;
    font-weight: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: ${textPrimary};

    &:hover {
      color: ${primary};
    }
  }
`;

export default reset;

import { css } from '@emotion/react';

// Biennale
import BiennaleHeavy from '../fonts/biennale-heavy.otf';

const BiennaleFont = css`
  @font-face {
    font-family: Biennale;
    font-weight: 900;
    src: url(${BiennaleHeavy});
  }
`;

export default BiennaleFont;

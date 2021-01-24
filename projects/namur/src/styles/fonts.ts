import { css } from '@emotion/react';

// Biennale
import BiennaleHair from '@/fonts/biennale-hair.otf';
import BiennaleHairIt from '@/fonts/biennale-hair-it.otf';
import BiennaleThin from '@/fonts/biennale-thin.otf';
import BiennaleThinIt from '@/fonts/biennale-thin-it.otf';
import BiennaleUltraLight from '@/fonts/biennale-ultra-light.otf';
import BiennaleUltraLightIt from '@/fonts/biennale-ultra-light-it.otf';
import BiennaleLight from '@/fonts/biennale-light.otf';
import BiennaleLightIt from '@/fonts/biennale-light-it.otf';
import BiennaleBook from '@/fonts/biennale-book.otf';
import BiennaleBookIt from '@/fonts/biennale-book-it.otf';
import BiennaleRegular from '@/fonts/biennale-regular.otf';
import BiennaleRegularIt from '@/fonts/biennale-regular-it.otf';
import BiennaleMedium from '@/fonts/biennale-medium.otf';
import BiennaleMediumIt from '@/fonts/biennale-medium-it.otf';
import BiennaleSemiBold from '@/fonts/biennale-semi-bold.otf';
import BiennaleSemiBoldIt from '@/fonts/biennale-semi-bold-it.otf';
import BiennaleHeavy from '@/fonts/biennale-heavy.otf';
import BiennaleHeavyIt from '@/fonts/biennale-heavy-it.otf';

const BiennaleFont = css`
  @font-face {
    font-family: Biennale;
    font-weight: 100;
    src: url(${BiennaleHair});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 100;
    font-style: italic;
    src: url(${BiennaleHairIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 200;
    src: url(${BiennaleThin});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 200;
    font-style: italic;
    src: url(${BiennaleThinIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 300;
    src: url(${BiennaleUltraLight});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 300;
    font-style: italic;
    src: url(${BiennaleUltraLightIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 400;
    src: url(${BiennaleLight});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 400;
    font-style: italic;
    src: url(${BiennaleLightIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 500;
    src: url(${BiennaleBook});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 500;
    font-style: italic;
    src: url(${BiennaleBookIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 600;
    src: url(${BiennaleRegular});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 600;
    font-style: italic;
    src: url(${BiennaleRegularIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 700;
    src: url(${BiennaleMedium});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 700;
    font-style: italic;
    src: url(${BiennaleMediumIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 800;
    src: url(${BiennaleSemiBold});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 800;
    font-style: italic;
    src: url(${BiennaleSemiBoldIt});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 900;
    src: url(${BiennaleHeavy});
  }
  @font-face {
    font-family: Biennale;
    font-weight: 900;
    font-style: italic;
    src: url(${BiennaleHeavyIt});
  }
`;

export default BiennaleFont;

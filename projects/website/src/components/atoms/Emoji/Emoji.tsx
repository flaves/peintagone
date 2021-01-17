import React from 'react';
import { css } from '@emotion/react';

interface EmojiProps {
  label: string;
  symbol: string;
}

const Emoji = ({ label, symbol }: EmojiProps): JSX.Element => (
  <span
    role="img"
    aria-label={label}
    aria-hidden={!label}
    css={css`
      display: inline-block;
      margin-right: 5px;
    `}
  >
    {symbol}
  </span>
);

export default Emoji;

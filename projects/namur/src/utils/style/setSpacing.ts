import { css } from '@emotion/react';
import { spacingBase } from '@/styles/theme';

const renderSpacing = (multiplier: number): string =>
  `${multiplier * spacingBase}px`;

const setSpacing = (
  m?: number,
  mt?: number,
  mr?: number,
  ml?: number,
  mb?: number,
  mx?: number,
  my?: number,
  p?: number,
  pt?: number,
  pr?: number,
  pl?: number,
  pb?: number,
  px?: number,
  py?: number,
): any => {
  let style = '';
  if (m)
    style += `
      margin: ${renderSpacing(m)};
    `;
  if (my)
    style += `
      margin-top: ${renderSpacing(my)};
      margin-bottom: ${renderSpacing(my)};
    `;
  if (mx)
    style += `
      margin-left: ${renderSpacing(mx)};
      margin-right: ${renderSpacing(mx)};
    `;
  if (mt)
    style += `
      margin-top: ${renderSpacing(mt)};
    `;
  if (ml)
    style += `
      margin-left: ${renderSpacing(ml)};
    `;
  if (mr)
    style += `
      margin-right: ${renderSpacing(mr)};
    `;
  if (mb)
    style += `
      margin-bottom: ${renderSpacing(mb)};
    `;
  if (p)
    style += `
      padding: ${renderSpacing(p)};
    `;
  if (py)
    style += `
      padding-top: ${renderSpacing(py)};
      padding-bottom: ${renderSpacing(py)};
    `;
  if (px)
    style += `
      padding-left: ${renderSpacing(px)};
      padding-right: ${renderSpacing(px)};
    `;
  if (pt)
    style += `
      padding-top: ${renderSpacing(pt)};
    `;
  if (pl)
    style += `
      padding-left: ${renderSpacing(pl)};
    `;
  if (pr)
    style += `
      padding-right: ${renderSpacing(pr)};
    `;
  if (pb)
    style += `
      padding-bottom: ${renderSpacing(pb)};
    `;

  return css`
    ${style}
  `;
};

export default setSpacing;

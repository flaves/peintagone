import { css } from '@emotion/react';
import theme from '@/styles/theme';

const renderSpacing = (multiplier: number): string =>
  `${multiplier * theme.spacingBase}px`;

const setSpacing = (
  m: number | undefined,
  mt: number | undefined,
  mr: number | undefined,
  ml: number | undefined,
  mb: number | undefined,
  mx: number | undefined,
  my: number | undefined,
  p: number | undefined,
  pt: number | undefined,
  pr: number | undefined,
  pl: number | undefined,
  pb: number | undefined,
  px: number | undefined,
  py: number | undefined,
) => {
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

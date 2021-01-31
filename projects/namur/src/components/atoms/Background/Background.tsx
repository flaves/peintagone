import React from 'react';
import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Img from '@/components/atoms/Img';

import mq from '@/styles/mq';

interface ClassesProps {
  root?: SerializedStyles;
  background?: SerializedStyles;
  content?: SerializedStyles;
}

export interface BackgroundProps {
  backgroundUrl?: string | null;
  backgroundAlt?: string | null;
  mobileUrl?: string | null;
  mobileAlt?: string | null;
  sizes?: string | null;
  fit?: 'cover' | 'contain';
  children?: React.ReactNode;
  classes?: ClassesProps;
  overlay?: boolean;
}

const Root = styled.div<BackgroundProps>`
  position: relative;
  overflow: hidden;
`;
const StyledImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
`;
const DesktopImg = styled(StyledImg)`
  display: none;

  ${mq('md')} {
    display: block;
  }
`;
const MobileImg = styled(StyledImg)`
  display: block;

  ${mq('md')} {
    display: none;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;
const setOverlay = (theme: Theme) => css`
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${theme.zIndex.overlay};
    background-color: rgba(17, 17, 17, 0.4);
  }
`;
const fitContain = css`
  object-fit: contain;
`;
const displayOnMobile = css`
  display: block;
`;

const Background = ({
  backgroundUrl,
  backgroundAlt,
  mobileUrl,
  mobileAlt,
  sizes,
  fit,
  children,
  classes,
  overlay,
  ...rest
}: BackgroundProps): JSX.Element => {
  if (!backgroundUrl) return <div />;

  const rootClassName = classes?.root;
  const backgroundClassName = classes?.background;
  const contentClassName = classes?.content;

  return (
    <Root css={[rootClassName, overlay && setOverlay]}>
      <DesktopImg
        src={backgroundUrl}
        alt={backgroundAlt || ''}
        sizes={sizes || '100vw'}
        css={[
          !mobileUrl && displayOnMobile,
          fit === 'contain' && fitContain,
          backgroundClassName,
        ]}
        {...rest}
      />
      {mobileUrl && (
        <MobileImg
          src={mobileUrl}
          alt={mobileAlt || ''}
          sizes={sizes || '100vw'}
          {...rest}
        />
      )}
      <Content css={contentClassName}>{children}</Content>
    </Root>
  );
};

export default Background;

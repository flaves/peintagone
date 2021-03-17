import React from 'react';
import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import Image, { FluidObject } from 'gatsby-image';

import mq from '@/styles/mq';

import { ImageType } from '@/types/image';

interface ClassesProps {
  root?: SerializedStyles;
  background?: SerializedStyles;
  backgroundMobile?: SerializedStyles;
  content?: SerializedStyles;
}

export interface BackgroundProps {
  desktop?: ImageType | null | undefined;
  mobile?: ImageType | null | undefined;
  height?: number;
  width?: number;
  sizes?: string | null;
  fit?: 'cover' | 'contain';
  children?: React.ReactNode;
  classes?: ClassesProps;
  overlay?: boolean;
}

const Root = styled.div<BackgroundProps>`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled(Image)``;
const DesktopImg = styled(StyledImg)`
  display: none;

  ${mq('lg')} {
    display: block;
  }
`;
const MobileImg = styled(StyledImg)`
  display: block;

  ${mq('lg')} {
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
  desktop,
  mobile,
  height,
  width,
  sizes,
  fit,
  children,
  classes,
  overlay,
  ...rest
}: BackgroundProps): JSX.Element => {
  if (!desktop) return <div />;

  const rootClassName = classes?.root;
  const backgroundClassName = classes?.background;
  const backgroundMobileClassName = classes?.backgroundMobile;
  const contentClassName = classes?.content;

  return (
    <Root css={[rootClassName, overlay && setOverlay]}>
      <ImageContainer>
        <DesktopImg
          fluid={desktop?.fluid as FluidObject}
          css={[
            !mobile && displayOnMobile,
            fit === 'contain' && fitContain,
            backgroundClassName,
            css`
              height: 400px;
            `,
          ]}
          {...rest}
        />
      </ImageContainer>
      {mobile && (
        <ImageContainer>
          <MobileImg
            fluid={mobile?.fluid as FluidObject}
            css={[fit === 'contain' && fitContain, backgroundMobileClassName]}
            {...rest}
          />
        </ImageContainer>
      )}
      <Content css={contentClassName}>{children}</Content>
    </Root>
  );
};

export default Background;

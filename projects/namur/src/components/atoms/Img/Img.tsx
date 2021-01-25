import React from 'react';
import Imgix from 'react-imgix';
import clsx from 'clsx';

import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

interface Props {
  src?: string | null;
  alt?: string | null;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

const Img = ({
  src,
  alt,
  className,
  sizes,
  width,
  height,
}: Props): JSX.Element => {
  if (!src) return <div />;

  return (
    <Imgix
      className={clsx('lazyload', className)}
      width={width}
      height={height}
      // @ts-ignore
      alt={alt}
      src={src}
      sizes={sizes}
      attributeConfig={{
        src: 'data-src',
        srcSet: 'data-srcset',
        sizes: 'data-sizes',
      }}
    />
  );
};

export default Img;

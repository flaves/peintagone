import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-alice-carousel/lib/alice-carousel.css';

/* eslint-disable */
import wrapWithProvider from './wrapWithProvider';
import Root from './src/components/organisms/Root';

export const wrapPageElement = ({ element, props }) => {
  return <Root {...props}>{element}</Root>;
};

export const wrapRootElement = wrapWithProvider;

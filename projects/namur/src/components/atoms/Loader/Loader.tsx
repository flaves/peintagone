import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';

const LoadingIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.white.main};
  font-size: 2rem;
  animation: 3s rotate linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = (): JSX.Element => {
  return <LoadingIcon icon={faCircleNotch} />;
};

export default Loader;

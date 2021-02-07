import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimes,
  faTimesCircle,
} from '@fortawesome/pro-solid-svg-icons';
import { v4 as uuid } from 'uuid';

import Typography from '@/components/atoms/Typography';
import Grid from '@/components/atoms/Layout/Grid';

import { useNotifContext } from '@/contexts/notificationsContext';
import useInterval from '@/hooks/useInterval';

interface OutProps {
  showSuccess: (text: string) => void;
  showError: (text: string) => void;
}

const Root = styled(Grid)`
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(1)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
const RootSuccess = styled(Root)`
  background-color: ${({ theme }) => theme.color.success.main};
`;
const RootError = styled(Root)`
  background-color: ${({ theme }) => theme.color.error.main};
`;
const Icon = styled(FontAwesomeIcon)`
  display: block;
  margin-right: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.white.main};
`;
const SuccessIcon = styled(Icon)``;
const ErrorIcon = styled(Icon)``;
const CloseIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  color: ${({ theme }) => theme.color.white.main};
  cursor: pointer;
`;
const Text = styled(Typography)`
  color: ${({ theme }) => theme.color.white.main};
  font-weight: 800;
  opacity: 1;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const useNotifications = (): OutProps => {
  const { notifs, pushNotif, popNotif, removeNotif } = useNotifContext();

  // Pop notifications every 5s / Disable interval when notifs array is empty
  useInterval(() => popNotif(), notifs.length > 0 ? 5000 : null);

  const handleShowSuccess = useCallback((text: string) => {
    const id = uuid();
    pushNotif({
      id,
      node: (
        <RootSuccess container alignItems="center">
          <SuccessIcon icon={faCheckCircle} />
          <Text variant="textSm">{text}</Text>
          <CloseIcon icon={faTimes} onClick={() => removeNotif(id)} />
        </RootSuccess>
      ),
    });
  }, []);

  const handleShowError = useCallback((text: string) => {
    const id = uuid();
    pushNotif({
      id,
      node: (
        <RootError container alignItems="center">
          <ErrorIcon icon={faTimesCircle} />
          <Text variant="textSm">{text}</Text>
          <CloseIcon icon={faTimes} onClick={() => removeNotif(id)} />
        </RootError>
      ),
    });
  }, []);

  return {
    showSuccess: handleShowSuccess,
    showError: handleShowError,
  };
};
export default useNotifications;

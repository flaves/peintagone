import React from 'react';
import styled from '@emotion/styled';

import { useNotifContext } from '@/contexts/notificationsContext';

const Root = styled.div`
  position: fixed;
  bottom: 5%;
  left: 5%;
  z-index: ${({ theme }) => theme.zIndex.fixed};
`;

const Notifications = (): JSX.Element => {
  const { notifs } = useNotifContext();

  const Notifs = notifs.map((notif, index) => (
    <div key={index.toString()}>{notif.node}</div>
  ));

  return <Root>{Notifs}</Root>;
};

export default Notifications;

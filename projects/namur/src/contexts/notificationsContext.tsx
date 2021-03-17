import React, { useMemo, useContext, useReducer } from 'react';

interface NotifProps {
  id: string;
  node: React.ReactNode;
}

export interface NotifContextType {
  notifs: NotifProps[];
  pushNotif: (notif: NotifProps) => void;
  popNotif: () => void;
  removeNotif: (id: string) => void;
  clearNotifs: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

enum ActionType {
  PUSH = 'PUSH',
  POP = 'POP',
  CLEAR = 'CLEAR',
  REMOVE = 'REMOVE',
}

type NotifAction =
  | { type: ActionType.PUSH; payload: NotifProps }
  | { type: ActionType.POP }
  | { type: ActionType.CLEAR }
  | { type: ActionType.REMOVE; payload: string };

export const NotifContext = React.createContext<NotifContextType>({
  notifs: [],
  pushNotif: () => {},
  popNotif: () => {},
  removeNotif: () => {},
  clearNotifs: () => {},
});

const reducer = (state: NotifProps[], action: NotifAction): NotifProps[] => {
  switch (action.type) {
    case ActionType.POP:
      if (state.length > 1) return [...state].slice(1);
      return [];
    case ActionType.PUSH: {
      if (state.length >= 3) {
        const popedArray = [...state].slice(1);
        return [...popedArray, action.payload];
      }
      return [...state, action.payload];
    }
    case ActionType.CLEAR:
      return [];
    case ActionType.REMOVE: {
      return state.filter((el) => el.id !== action.payload);
    }
    default:
      throw new Error();
  }
};

const NotifContextProvider = ({ children }: ProviderProps): JSX.Element => {
  const [notifs, dispatch] = useReducer(reducer, []);

  const popNotif = () => {
    dispatch({ type: ActionType.POP });
  };

  const pushNotif = (notif: NotifProps) => {
    dispatch({ type: ActionType.PUSH, payload: notif });
  };

  const removeNotif = (id: string) => {
    dispatch({ type: ActionType.REMOVE, payload: id });
  };

  const clearNotifs = () => dispatch({ type: ActionType.CLEAR });

  const value = useMemo(
    () => ({ notifs, pushNotif, popNotif, removeNotif, clearNotifs }),
    [notifs, dispatch, pushNotif, popNotif, removeNotif, clearNotifs],
  );

  return (
    <NotifContext.Provider value={value}>{children}</NotifContext.Provider>
  );
};

export const useNotifContext = (): NotifContextType => useContext(NotifContext);

export default NotifContextProvider;

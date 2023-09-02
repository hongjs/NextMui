'use client';

import { AppReducer, initialState } from '@/reducers/AppReducer';
import { AppContextProps } from '@/types/appState';
import { createContext, useMemo, useReducer } from 'react';

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

const AppContextWrapper: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const cachedValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={cachedValue}>
      <>{children}</>
    </AppContext.Provider>
  );
};

export default AppContextWrapper;

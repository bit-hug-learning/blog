import React from 'react';
import actions from './actions';

const initialState = {
  sidenavOpen: false,
  hashtags: [],
};

const GlobalContext = React.createContext({
  state: initialState,
  actions: actions(initialState),
});

export const useGlobalState = () => {
  return React.useContext(GlobalContext);
};

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);
  const value = { state, actions: actions(state, setState) };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

function actions(state, setState) {
  const toggleSidenav = (forcedStatus) => {
    setState({
      ...state,
      sidenavOpen:
        typeof forcedStatus === 'boolean' ? forcedStatus : !state.sidenavOpen,
    });
  };

  return {
    toggleSidenav,
    setGlobalState: setState,
  };
}

export default actions;

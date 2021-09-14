function actions(state, setState) {
  const toggleSidenav = (forcedStatus) => {
    setState({
      ...state,
      sidenavOpen:
        typeof forcedStatus === 'boolean' ? forcedStatus : !state.sidenavOpen,
    });
  };

  const setHashtags = (hashtags) => {
    setState({
      ...state,
      hashtags,
    });
  };

  return {
    toggleSidenav,
    hashtags,
    setGlobalState: setState,
  };
}

export default actions;

import Header from 'components/Header/index';
import SideNav from 'components/Sidenav/index';
import { useGlobalState } from 'context/index';
import useFetchData from 'hooks/useFetchData';
import React from 'react';

const Layout = ({ children }) => {
  const { data } = useFetchData('/hashtags.json');
  const { actions } = useGlobalState();

  useEffect(() => {
    if (data) {
      actions.setHashtags(data);
    }
  }, [data]);

  return (
    <>
      <Header />
      <SideNav />
      {children}
    </>
  );
};

export default Layout;

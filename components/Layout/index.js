import Header from 'components/Header/index';
import SideNav from 'components/Sidenav/index';
import { useGlobalState } from 'context/index';
import useFetchData from 'hooks/useFetchData';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      {children}
    </>
  );
};

export default Layout;

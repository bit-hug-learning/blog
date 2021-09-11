import Header from 'components/Header/index';
import SideNav from 'components/Sidenav/index';
import React from 'react';

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

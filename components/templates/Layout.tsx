import React, { ReactNode } from 'react';
import LoadingScreen from '../organisms/LoadingScreen';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
};

export default Layout;

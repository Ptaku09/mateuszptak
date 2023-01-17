import React, { ReactNode, useContext } from 'react';
import LoadingScreen from '../organisms/LoadingScreen';
import Spline from '@splinetool/react-spline';
import useBreakpointDetect from '../../hooks/useBreakpointDetect';
import { LoadingStatusContext } from '../../providers/LoadingStatusProvider';

const Layout = ({ children }: { children: ReactNode }) => {
  const { isBlob } = useBreakpointDetect();
  const { setAppLoaded } = useContext(LoadingStatusContext);

  return (
    <>
      <LoadingScreen />
      <div className="h-[900px] xl:h-screen w-screen xl:grid xl:grid-cols-[1fr_1280px_1fr] xl:grid-rows-[1fr_890px_1fr]">
        {isBlob && (
          <Spline className="absolute z-10" onLoad={() => setAppLoaded(true)} scene="https://prod.spline.design/byrEA1hu6JsTNFD8/scene.splinecode" />
        )}
        {children}
      </div>
    </>
  );
};

export default Layout;

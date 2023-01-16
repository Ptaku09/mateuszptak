import '/styles/globals.css';
import type { AppProps } from 'next/app';
import LoadingStatusProvider from '../providers/LoadingStatusProvider';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return <LoadingStatusProvider>{getLayout(<Component {...pageProps} />)}</LoadingStatusProvider>;
}

export default MyApp;

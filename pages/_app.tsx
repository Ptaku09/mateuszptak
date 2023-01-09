import '/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/templates/Layout';
import LoadingStatusProvider from '../providers/LoadingStatusProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingStatusProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoadingStatusProvider>
  );
}

export default MyApp;

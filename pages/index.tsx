import type { NextPage } from 'next';
import Spline from '@splinetool/react-spline';
import useMobileDetect from 'hooks/useMobileDetect';

const Home: NextPage = () => {
  const { isMobile } = useMobileDetect();

  return (
    <div className="h-screen w-screen">
      {!isMobile && <Spline className="absolute z-0" scene="https://prod.spline.design/byrEA1hu6JsTNFD8/scene.splinecode" />}
    </div>
  );
};

export default Home;

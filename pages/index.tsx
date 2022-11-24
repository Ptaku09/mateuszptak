import type { NextPage } from 'next';
import Spline from '@splinetool/react-spline';
import useMobileDetect from 'hooks/useMobileDetect';
import HighlightedText from 'components/atoms/HighlightedText';
import TopBar from 'components/molecules/TopBar';
import PurpleText from 'components/atoms/PurpleText';

const Home: NextPage = () => {
  const { isMobile } = useMobileDetect();

  return (
    <div className="h-screen w-screen">
      {!isMobile && <Spline className="absolute z-0" scene="https://prod.spline.design/byrEA1hu6JsTNFD8/scene.splinecode" />}
      <div className="w-full h-full p-2 rounded-lg bg-color-corners">
        <div className="relative w-full h-full px-5 py-2 bg-stone-800 text-white font-silkscreen rounded-sm overflow-hidden">
          <TopBar />
          <div className="mt-10">
            <div className="flex gap-2 flex-col">
              <p className="text-sm">Hi, my name is</p>
              <h1 className="block text-4xl font-permanent">
                <HighlightedText>Mateusz Ptak</HighlightedText>
              </h1>
            </div>
            <div className="relative h-full mt-6 flex flex-col gap-2 text-sm text-slate-200 before:absolute before:-left-4 before:w-0.5 before:h-full before:bg-gradient-to-tr before:from-indigo-500 before:to-purple-500">
              <p>
                I&apos;m React developer based in Wroclaw, Poland. I&apos;m currently in 2nd year of <PurpleText>Applied Computer Science</PurpleText>{' '}
                at Wroclaw University of Science and Technology.
              </p>
              <p>
                I started learning frontend technologies in <PurpleText>May 2021</PurpleText>.
              </p>
              <p>Besides programming, I&apos;m interested in football ⚽.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

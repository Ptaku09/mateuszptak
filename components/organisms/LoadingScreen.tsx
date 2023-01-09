import React, { useContext, useEffect, useRef } from 'react';
import anime, { AnimeInstance } from 'animejs';
import AnimatedLogo from '../atoms/AnimatedLogo';
import { LoadingStatusContext } from '../../providers/LoadingStatusProvider';
import useBreakpointDetect from '../../hooks/useBreakpointDetect';

const LoadingScreen = () => {
  const animationRef = useRef<AnimeInstance>();
  const { isAppLoaded } = useContext(LoadingStatusContext);
  const { isBlob } = useBreakpointDetect();

  useEffect(() => {
    if (isBlob) {
      anime.remove('.loading-screen');

      if (isAppLoaded) {
        animationRef.current = anime({
          targets: '.loading-screen',
          easing: 'easeInOutSine',
          duration: 400,
          height: 0,
          delay: 500,
        });
      }
    } else {
      anime.remove('.loading-screen');

      animationRef.current = anime({
        targets: '.loading-screen',
        easing: 'easeInOutSine',
        duration: 400,
        height: 0,
        delay: 1700,
      });
    }
  }, [isAppLoaded, isBlob]);

  return (
    <div className="loading-screen fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-stone-800 overflow-hidden">
      <AnimatedLogo />
    </div>
  );
};

export default LoadingScreen;

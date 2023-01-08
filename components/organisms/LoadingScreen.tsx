import React, { useEffect, useRef } from 'react';
import anime, { AnimeInstance } from 'animejs';
import AnimatedLogo from '../atoms/AnimatedLogo';

const LoadingScreen = () => {
  const animationRef = useRef<AnimeInstance>();

  useEffect(() => {
    animationRef.current = anime({
      easing: 'easeInOutSine',
      targets: '.loading-screen',
      duration: 400,
      height: 0,
      delay: 1700,
    });
  }, []);

  return (
    <div className="loading-screen fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-stone-800 overflow-hidden">
      <AnimatedLogo />
    </div>
  );
};

export default LoadingScreen;

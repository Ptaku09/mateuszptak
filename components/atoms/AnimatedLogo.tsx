import React, { useEffect, useRef } from 'react';
import anime, { AnimeInstance } from 'animejs';

const AnimatedLogo = () => {
  const animationRef = useRef<AnimeInstance>();

  useEffect(() => {
    animationRef.current = anime({
      targets: 'svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      fill: '#f7f1e3',
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 1500,
      delay: (el: HTMLElement, i: number) => i * 500,
      endDelay: 200,
      loop: true,
      direction: 'alternate',
    });
  }, []);

  return (
    <div className="flex gap-2">
      <svg width="62.5" height="62.5" viewBox="0 0 62.5 62.5" xmlns="http://www.w3.org/2000/svg">
        <g strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#f7f1e3" strokeWidth="0.5mm" fill="none">
          <path
            d="M 12.5 62.5 L 0 62.5 L 0 0 L 12.5 0 L 12.5 12.5 L 25 12.5 L 25 25 L 37.5 25 L 37.5 37.5 L 25 37.5 L 25 25 L 12.5 25 L 12.5 62.5 Z M 37.5 25 L 50 25 L 50 62.5 L 62.5 62.5 L 62.5 0 L 50 0 L 50 12.5 L 37.5 12.5 L 37.5 25 Z"
            vectorEffect="non-scaling-stroke"
            strokeDashoffset={300}
            strokeDasharray={300}
          />
        </g>
      </svg>
      <svg width="50" height="62.5" viewBox="0 0 50 62.5" xmlns="http://www.w3.org/2000/svg">
        <g strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#f7f1e3" strokeWidth="0.5mm" fill="none">
          <path
            d="M 12.5 62.5 L 0 62.5 L 0 0 L 37.5 0 L 37.5 12.5 L 50 12.5 L 50 25 L 37.5 25 L 37.5 37.5 L 12.5 37.5 L 12.5 62.5 Z M 12.5 12.5 L 12.5 25 L 37 25 L 37 12.5 L 12.5 12.5 Z"
            vectorEffect="non-scaling-stroke"
            strokeDashoffset={300}
            strokeDasharray={300}
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;

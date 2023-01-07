import React, { useEffect } from 'react';
import anime from 'animejs';

const AnimatedLogo = () => {
  useEffect(() => {
    anime({
      targets: 'svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 1000,
      delay: function (el, i) {
        return i * 1000;
      },
      endDelay: 250,
      loop: true,
      direction: 'alternate',
    });
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.53 73.75">
      <path
        d="M4.18,18.84c1.1-1.85,2.49-3.49,4.17-4.84s4.78-2.58,6.78-1.78,2.02,3.61,1.04,5.52c-2.56,4.99-7.12,13.13-9.18,19.88,4.92-9.56,14.78-21.81,21.36-24.69,1.78-.78,3.54,.81,3.37,2.74-.51,5.81-5.3,12.69-7.96,19.04,3.46-7.49,11.8-17.01,15.71-18.77,1.1-.5,2.45-.6,3.35,.2s.93,2.16,.57,3.31c-1.87,6-6.36,12.21-6.64,17.11-.17,3.05,1.94,4.07,4.01,2.86,2.55-1.49,3.85-2.85,5.69-5.73"
        fill="none"
        stroke="#f7f1e3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M58.73,11.38c-3.68,10.23-7.36,20.45-11.03,30.68-.11-9.57,3.59-19.14,10.11-26.15,2.8-3.01,9.03-3.09,11.11,.45,2.18,3.72,2,6.86-.83,10.89s-7.29,6-10.66,3.72"
        fill="none"
        stroke="#f7f1e3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M.15,50.02c6.65-.88,13.28-1.26,19.91-1.46,3.32-.15,6.62-.11,9.94-.16,3.31,.02,6.62,.08,9.93,.13,3.31,.14,6.62,.23,9.92,.41,3.3,.23,6.61,.37,9.91,.69,6.61,.55,13.21,1.28,19.8,2.51h.02c.08,.02,.13,.1,.12,.18-.01,.07-.08,.12-.15,.12l-39.71-.91L.14,50.32c-.08,0-.15-.07-.14-.15,0-.07,.06-.13,.13-.14h.02Z"
        fill="none"
        stroke="rgb(168 85 247)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

export default AnimatedLogo;

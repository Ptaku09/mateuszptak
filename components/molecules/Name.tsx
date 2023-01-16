import React from 'react';
import HighlightedText from '../atoms/HighlightedText';

const Name = () => {
  return (
    <>
      <p className="text-sm">Hi, my name is</p>
      <h1 className="block text-4xl font-permanent">
        <HighlightedText>Mateusz Ptak</HighlightedText>
      </h1>
    </>
  );
};

export default Name;

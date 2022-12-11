import React from 'react';

const slider = ({data}: { data: string[] }) => {
  return (
    <div className="w-auto flex text-gray-500 animate-slider">
      {data.map((word: string, index: number) => (index < 5 &&
        <div key={`${word}-1`} className="h-5 w-40 text-center">
          <p>{word}</p>
        </div>
      ))}
      {data.map((word: string, index: number) => (index < 5 &&
        <div key={`${word}-2`} className="h-5 w-40 text-center">
          <p>{word}</p>
        </div>
      ))}
      {data.map((word: string, index: number) => (index < 5 &&
        <div key={`${word}-3`} className="h-5 w-40 text-center">
          <p>{word}</p>
        </div>
      ))}
    </div>
  );
};

export default slider;

import React from 'react';

const HighlightedText = ({ children }: { children: string }) => {
  return (
    <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-gradient-to-tr before:from-indigo-500 before:to-purple-500 text-white whitespace-nowrap">
      <span className="relative text-white">{children}</span>
    </span>
  );
};

export default HighlightedText;

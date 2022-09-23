import React from 'react';

const BgMotion = () => {
  return (
    <div className="relative -z-10 w-full max-w-lg">
      <div className="absolute top-0 -left-2 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter  opacity-70 animate-blob blur-4xl"></div>
      <div className="absolute top-10 -bottom-20 left-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter  opacity-70 animate-blob blur-4xl animation-delay-4000 "></div>
      <div className="absolute top-0 right-4 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 blur-4xl"></div>
      <div className="absolute top-0 -bottom-2 left-20 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-4000 blur-4xl"></div>
    </div>
  );
};

export default BgMotion;

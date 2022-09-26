import React from 'react';
import { useEffect, useState } from 'react';

const myName = 'Aislã Lucio';

const TyperWriter = () => {
  const [typer, setTyper] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTyper(myName.slice(0, typer.length + 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [typer]);

  return (
    <>
      <h2 className="text-6xl sm:text-7xl font-black  text-green-700">
        {typer}
        <span className="blinking-cursor animate-blink"></span>
      </h2>
    </>
  );
};

export default TyperWriter;

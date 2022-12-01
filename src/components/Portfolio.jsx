import React from 'react';
import pokedex from '../assets/portfolio/pokedex.png';
import crypto from '../assets/portfolio/crypto.png';
import todos from '../assets/portfolio/todos.png';
import movie from '../assets/portfolio/movie.png';
import breve from '../assets/portfolio/breve.jpg';

const Portfolio = () => {
  const handleDemo = (demo) => portfolios.map(() => window.open(demo));
  const handleCode = (github) => portfolios.map(() => window.open(github));

  const portfolios = [
    {
      id: 1,
      name: 'Pokedex-App',
      src: pokedex,
      demo: 'https://aisl1n.github.io/pokedex-app/',
      github: 'https://github.com/aisl1n/pokedex-app',
      style: 'shadow-green-400',
    },
    {
      id: 2,
      name: 'Crypto-App',
      src: crypto,
      demo: 'https://aisl1n.github.io/crypto-app/',
      github: 'https://github.com/aisl1n/crypto-app',
      style: 'shadow-orange-300',
    },
    {
      id: 3,
      name: 'Todo-App',
      src: todos,
      demo: 'https://flamboyant-snyder-2fab1c.netlify.app/',
      github: 'https://github.com/aisl1n/todos-app',
      style: 'shadow-gray-400',
    },
    {
      id: 4,
      name: 'Movie-App',
      src: movie,
      demo: 'https://lucioaisla.tech/',
      github: 'https://github.com/aisl1n/movie-app',
      style: 'shadow-blue-800',
    },
    {
      id: 5,
      name: 'Em breve',
      src: breve,
      demo: 'https://github.com/aisl1n',
      github: 'https://github.com/aisl1n',
      style: 'shadow-black',
    },
    {
      id: 6,
      name: 'Em breve',
      src: breve,
      demo: 'https://github.com/aisl1n',
      github: 'https://github.com/aisl1n',
      style: 'shadow-black',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-green-900 to-green-500 w-full pb-10 pt-20 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500">
            Portfolio
          </p>
          <p className="py-6">Dê uma olhada nos meu projetos!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, name, src, demo, style, github }) => (
            <div
              key={id}
              className={`bg-white/20 shadow-lg rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center mt-2">{name}</div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDemo(demo)}
                  className="bg-green-800 rounded-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCode(github)}
                  className="bg-green-800 rounded-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

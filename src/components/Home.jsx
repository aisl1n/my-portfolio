import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineWavingHand,
} from 'react-icons/md';
import { Link } from 'react-scroll';
import MobileSocialLinks from './MobileSocialLinks';

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center p-20">
            <h2 className="text-2xl sm:text-4xl text-black font-extralight flex">
              Olá! <MdOutlineWavingHand className="ml-2 mr-2" />
            </h2>
            <h2 className="text-2xl sm:text-5xl text-black font-bold flex">
              Eu sou
            </h2>
            <h1 className="text-4xl sm:text-7xl font-black  text-green-700">
              Aislã Lucio.
            </h1>

            <div className="relative -z-10 w-full max-w-lg">
              <div className="absolute top-0 -left-2 w-60 h-60 bg-green-500 rounded-full mix-blend-multiply filter  opacity-70 animate-blob blur-xl"></div>
              <div className="absolute top-10 -bottom-20 left-10 w-60 h-60 bg-cyan-200 rounded-full mix-blend-multiply filter  opacity-70 animate-blob blur-xl animation-delay-4000 "></div>
              <div className="absolute top-0 right-4 w-60 h-60 bg-green-500 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 blur-xl"></div>
              <div className="absolute top-0 -bottom-2 left-20 w-60 h-60 bg-cyan-200 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-4000 blur-xl"></div>
            </div>

            <p className="text-gray-900 font-bold text-sm md:text-xl">
              {'<'} Desenvolvedor Front-End /{'>'}
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={700}
                className="group shadow-xl text-white w-fit px-14 py-3 mt-2 flex items-center rounded-md bg-gradient-to-tr from-green-400 to-green-800 cursor-pointer"
              >
                Portifólio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
            <MobileSocialLinks />
          </div>
          <div>
            <img
              src={HeroImage}
              alt="My profile"
              className="border-x-green-400 border-8 shadow-xl rounded-full mx-auto max-w-xs sm:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

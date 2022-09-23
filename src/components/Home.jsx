import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineWavingHand,
} from 'react-icons/md';
import { Link } from 'react-scroll';
import MobileSocialLinks from './MobileSocialLinks';
import BgMotion from './BgMotion';

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full">
        <BgMotion />
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-20 md:flex-row">
          <div className="flex flex-col justify-center pb-5 mt-20">
            <h2 className="text-2xl sm:text-4xl text-black font-light flex">
              Olá! <MdOutlineWavingHand className="ml-2 mr-2" />
            </h2>
            <h2 className="text-3xl sm:text-5xl text-black font-bold flex">
              Eu sou
            </h2>
            <h1 className="text-6xl sm:text-7xl font-black  text-green-700">
              Aislã Lucio.
            </h1>
            <BgMotion />
            <p className="text-gray-900 font-bold text-2xl md:text-xl">
              {'<'} Desenvolvedor Front-End /{'>'}
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={700}
                className="group shadow-xl text-white py-3 mt-5 flex justify-center items-center rounded-md bg-gradient-to-tr from-green-400 to-green-800 cursor-pointer"
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
            <BgMotion />
            <img
              src={HeroImage}
              alt="My profile"
              className="border-x-green-400 border-8 shadow-xl rounded-full mx-auto max-w-xs sm:w-full"
            />
            <BgMotion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

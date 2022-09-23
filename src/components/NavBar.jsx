import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'skills',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black fixed backdrop-blur-xl bg-white/30">
      <div>
        <h1 className="text-5xl font-signature ml-2">Aislã</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-2xl text-black font-bold font-signature hover:scale-110 duration-300"
          >
            <Link to={link} smooth duration={700}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-green-600 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur-xl bg-black/80">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-12 text-5xl font-bold font-signature text-green-600"
            >
             <Link onClick={() => setNav(!nav)} to={link} smooth duration={700}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

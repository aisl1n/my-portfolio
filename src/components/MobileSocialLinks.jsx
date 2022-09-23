import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const MobileSocialLinks = () => {
  const links = [
    {
      id: 1,
      name: 'LinkedIn',
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/aisl1n/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      name: 'Github',
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/aisl1n',
    },
    {
      id: 3,
      name: 'Resume',
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Resume - Aislã.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="justify-evenly sm:hidden">
      <ul>
        {links.map(({ id, name, child, href, download }) => (
          <li
            key={id}
            className="group shadow-xl text-white px-10 py-2 my-2 flex justify-center items-center rounded-md bg-gradient-to-tr from-green-400 to-green-800 cursor-pointer"
          >
            <a
              href={href}
              className="flex mt-2"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
            <span className="ml-1">{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSocialLinks;

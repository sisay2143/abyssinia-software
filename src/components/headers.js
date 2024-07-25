// src/components/Header.js
import React from 'react';
import NavLink from './navLink';

const Header = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Building System', path: '/building' },
    { name: 'ERP System', path: '/erp' },
    { name: 'School System', path: '/school' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <div className="sticky top-0 bg-gray-800">
      <div className="bg-gray-900">
      </div>
      <div className=" w-full sticky top-0">
        <nav className="flex items-center justify-between flex-wrap bg-green-700 p-4">
          <a href="/" className=" text-cyan-300 text-2xl size-25  font-bold">
            Abyssinia Software Solution
          </a>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="flex flex-grow justify-between text-2xl hover:border-y-cyan-300">
              {links.map((link, index) => (
                <NavLink  key={index} name={link.name} path={link.path} />
              ))}
            </div>
            <div>
              <a href="google.com" className="inline-block text-sm px-6 text-2xl py-3 leading-none border rounded-full  text-black border-cyan-300 bg-cyan-300 hover:border-transparent hover:text-white hover:bg-gray-800 mt-4 lg:mt-0">
                Start Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

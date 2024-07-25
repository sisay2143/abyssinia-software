// src/components/NavLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ name, path }) => {
  return (
    <Link to={path} className="block py-2 px-4 lg:py-0 lg:flex-grow lg:text-center text-white hover:text-gray-400 border-y-cyan-300 hover:border-y-cyan-300">
      {name}
    </Link>
  );
};

export default NavLink;

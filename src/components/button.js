// src/components/Button.js
import React from 'react';

const Button = ({ text, onClick, primary }) => {
  const baseClasses = "rounded-full py-4 px-8 mb-4 text-3xl fadeInUp animate__animated";
  const primaryClasses = "bg-blue-500 hover:bg-cyan-800 text-white  ";
  const secondaryClasses = "bg-gray-800 hover:bg-cyan-400 text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;

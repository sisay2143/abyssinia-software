// src/components/SlideContent.js
import React from 'react';
import Button from './button';

const SlideContent = ({ title, subtitle, button1Click, button2Click }) => {
  return (
    <div className="absolute inset-0 flex flex-col  justify-center ml-32   p-10 bg-black bg-opacity-50">
      <h1 className="text-white text-8xl mb-6  animate__fadeInUp" style={{ animationDelay: '1.3s' }}>{title}</h1>
      <p className="text-white text-2xl mb-8  animate__fadeInUp" style={{ animationDelay: '1.5s' }}>{subtitle}</p>
      <div className="flex space-x-6 text-2xl ">
        <Button text="Apply Now" onClick={button1Click} primary />
        <Button text="Read More" onClick={button2Click} baseClasses/>
      </div>
    </div>
  );
};

export default SlideContent;

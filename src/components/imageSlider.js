// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import SlideContent from './slideContent';
// import image1 from '../assets/365bg5.png';
import image2 from '../assets/slide1.jpg';
import image3 from '../assets/slide2.jpg';
import image1 from '../assets/laptop-5673901_1920.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: image1,
      title: 'General IT Consulting',
      subtitle: 'We provide Technology consulting and implementation on software, Networking, Cyber, Hardware development and Implementation.',
      button1Click: () => alert('Apply Now clicked!'),
      button2Click: () => alert('Read More clicked!'),
    },
    {
      image: image1,
      title: 'Software As Service SAS',
      subtitle: 'We have SAS ERP system, School System and Mall information system.',
      button1Click: () => alert('Apply Now clicked!'),
      button2Click: () => alert('Read More clicked!'),
    },
    {
      image: image1,
      title: 'Mobile App Dvelopment',
      subtitle: 'We design mobile apps for Android and iOS devices with free deployment and unlimited technical support.',
      button1Click: () => alert('Apply Now clicked!'),
      button2Click: () => alert('Read More clicked!'),
    },
    {
      image: image1,
      title: 'Web Development',
      subtitle: 'Website design and development.',
      button1Click: () => alert('Apply Now clicked!'),
      button2Click: () => alert('Read More clicked!'),
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[650px]">
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          <SlideContent
            title={slide.title}
            subtitle={slide.subtitle}
            button1Click={slide.button1Click}
            button2Click={slide.button2Click}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

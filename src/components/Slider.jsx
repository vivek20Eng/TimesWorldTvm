// src/components/Slider.jsx --->
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    { src: 'img/slider1.png', alt: 'Slide 1' },
    { src: 'img/slider2.png', alt: 'Slide 2' },
    { src: 'img/slider3.png', alt: 'Slide 3' },
  ];

  if (isLoading) {
    return <div className="slider-container" style={{ height: '300px', background: '#e0e0e0' }} />;
  }

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-100 h-100 object-cover"
              style={{ height: '300px' }}
              onError={(e) => { e.target.src = 'https://placehold.co/800x300?text=Error'; }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
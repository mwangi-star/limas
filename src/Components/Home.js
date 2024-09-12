import React, { useState, useCallback, useEffect } from 'react';
import '../Css/Home.css';
import picha from '../Assets/images/limagae.jpg';
import slide1 from '../Assets/images/limasflowes.jpg';
import slide2 from '../Assets/images/keja 2.jpg';
import slide4 from '../Assets/images/limasdecore.jpg';

import Rooms from './Rooms';
import Gallery from './Gallery';
import Review from './Review';
import Reservation from './Reservation';
import ContactForm from './ContactForm';

function Home() {
  const slides = [
    { image: picha, caption: "" },
    { image: slide1, caption: "" },
    { image: slide2, caption: "" },
    { image: slide4, caption: "" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, [nextSlide]); // Make sure nextSlide is included in the dependency array

  return (
    <div>
      <section className="home" id="home">
        <div className="carousel">
          <div
            className="slide"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="content">
              <h3>{slides[currentSlide].caption}</h3>
            </div>
          </div>
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>

      {/* Add the other sections below the carousel */}
      <Rooms />
      <Reservation />
      <Gallery />
      <Review />
      <ContactForm />
    </div>
  );
}

export default Home;

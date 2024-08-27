import React, { useState, useEffect } from 'react';
import '../Css/Home.css';
import picha from '../Assets/images/limagae.jpg'
import slide1 from '../Assets/images/limasflowes.jpg';
import slide2 from '../Assets/images/keja 2.jpg';

import slide4 from '../Assets/images/limasdecore.jpg';

// Import the other components

import Rooms from './Rooms';
import Gallery from './Gallery';
import Review from './Review';
import Reservation from './Reservation';
import ContactForm from './ContactForm';

function Home() {
  const slides = [
    { image: picha, caption: "Best rooms in town" },
    { image: slide1, caption: "Best rooms in town" },
    { image: slide2, caption: "Rooms equipped with TV and free wifi" },
 
    { image: slide4, caption: "Variety of drinks available" },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, []);

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
      <ContactForm/>
    </div>
  );
}

export default Home;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../Css/Gallery.css';
import gallery7 from '../Assets/images/limagae.jpg';
import gallery8 from '../Assets/images/keja 2.jpg';
import gallery9 from '../Assets/images/njerooms.jpg';
import gallery1 from '../Assets/images/backroomslimas.jpg';
import gallery10 from '../Assets/images/msaja.jpg';
import gallery12 from '../Assets/images/club1.jpg';
import gallery11 from '../Assets/images/limastents.jpg';
import gallery2 from '../Assets/images/limasflowes.jpg';
import gallery3 from '../Assets/images/limastent1.jpg';
import gallery4 from '../Assets/images/food.jpg';
import gallery5 from '../Assets/images/room1.jpg';
import gallery6 from '../Assets/images/limasdecore.jpg';



import { Autoplay } from 'swiper/modules'; // Import Autoplay module

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading"> Gallery</h1>
      <Swiper
        spaceBetween={15} // Adjust space between slides
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500, // Adjust the autoplay delay
          disableOnInteraction: false, // Autoplay continues after interaction
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]} // Include the Autoplay module
        className="gallery-slider"
      >

        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery7} alt="Gallery seven" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery1} alt="Gallery one" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery2} alt="Gallery two" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery3} alt="Gallery three" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery4} alt="Gallery four" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery5} alt="Gallery five" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery6} alt="Gallery six" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery11} alt="Gallery eleven" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery12} alt="twelve" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery8} alt="Gallery eight" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery9} alt="Gallery nine" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="card">
            <img src={gallery10} alt="Gallery ten" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Gallery;

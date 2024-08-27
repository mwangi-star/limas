import React from 'react';
import '../Css/Review.css';

function Review() {
  return (
    <section className="review" id="review">
      <h2 className="heading">Client's Review</h2>
      
      {/* Container for review cards */}
      <div className="review-cards">
        {/* First Review */}
        <div className="review-card">
          <i className="fas fa-quote-right"></i>
          <p>“I recently stayed at the Limas Hotel and had an exceptional experience. The rooms were clean, very comfortable, and the staff went above and beyond to make our stay enjoyable. The location was perfect, allowing us to easily explore the nearby attractions. The breakfast buffet was delicious with a wide variety of options. I highly recommend this hotel to anyone visiting the area. I will definitely be returning!”</p>
          <div className="user">
            <div className="user-info">
              <h3>John Omondi</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Second Review */}
        <div className="review-card">
          <i className="fas fa-quote-right"></i>
          <p>“The service at Limas Hotel is unmatched. The staff were incredibly friendly and attentive. The rooms were well-equipped and clean. This hotel made our stay truly memorable. Highly recommended!”</p>
          <div className="user">
            <div className="user-info">
              <h3>Mary Njenga</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Third Review */}
        <div className="review-card">
          <i className="fas fa-quote-right"></i>
          <p>“We had a wonderful stay at Limas Hotel. The rooms were spacious and comfortable, and the amenities were top-notch. The hotel is conveniently located, and the staff were very helpful in arranging tours and activities for us. Will definitely come back!”</p>
          <div className="user">
            <div className="user-info">
              <h3>Michael Kimani</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

export default Review;

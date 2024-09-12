import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Rooms.css';
import room1image from '../Assets/images/keja 22k.jpg';
import room2image from '../Assets/images/keja 2.jpg';
import room3image from '../Assets/images/keja1.jpg';
import room4image from '../Assets/images/keja2k.jpg';
import room5image from '../Assets/images/keja3.jpg';
import room6image from '../Assets/images/room1.jpg';

function Rooms() {
  const rooms = [
    { 
      image: room1image, 
      price: '2000ksh/night', 
      title: 'Luxury Room', 
      description: 'Enjoy a relaxing stay in our Exclusive Room, featuring a cozy ambiance and all the modern amenities you need for a comfortable escape.' 
  },
  { 
      image: room2image, 
      price: '2000ksh/night', 
      title: 'Luxury Room', 
      description: 'Immerse yourself in luxury with our Luxury Room, offering elegant decor, high-end furnishings, and stunning views to make your stay unforgettable.' 
  },
  { 
      image: room3image, 
      price: '1500ksh/night', 
      title: 'Deluxe Room', 
      description: 'Our Deluxe Room combines sophistication and comfort, with spacious interiors and a plush king-sized bed, perfect for a premium experience.' 
  },
  { 
      image: room4image, 
      price: '1500ksh/night', 
      title: 'Deluxe Room', 
      description: 'Experience superior comfort in our Deluxe Room, featuring upscale amenities and a stylish design to enhance your stay with elegance and relaxation.' 
  },
  { 
      image: room5image, 
      price: '1000ksh/night', 
      title: 'Deluxe Room', 
      description: 'Indulge in our Deluxe Room with its exceptional comfort, modern decor, and thoughtful touches designed for an exquisite stay.' 
  },
  { 
      image: room6image, 
      price: '1000ksh/night', 
      title: 'Deluxe Room', 
      description: 'Relax in our Deluxe Room, where contemporary design meets plush comfort, offering a serene escape with all the amenities you desire.' 
  },
  ];

  return (
    <section className="room" id="room">
      <h1 className="heading">Our Rooms</h1>
      <div className="room-slider">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <div className="room-image">
              <img src={room.image} alt={`room ${index + 1}`} />
              <span className="price">{room.price}</span>
            </div>
            <div className="room-content">
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <Link to="/contact-us" className="btn">Book Now</Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;

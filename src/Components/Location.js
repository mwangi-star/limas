import React from 'react';
import locationImage from '../Assets/images/lomas.jpg'; // Adjust the path as needed
import '../Css/Location.css'; // Create this CSS file to style your component

const Location = () => {
  return (
    <div className="location-container">
      <img src={locationImage} alt="Our Location" className="location-image" />
    </div>
  );
};

export default Location;

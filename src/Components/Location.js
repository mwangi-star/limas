import React from 'react';
import '../Css/Location.css';

const Location = () => {
  return (
    <div className="location-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.777611774992!2d35.0251838!3d1.0355365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1782279d1ad61f7b%3A0xc538e21a7d7f8896!2sClub%20limas%2C%20hotel%20and%20accommodation!5e0!3m2!1sen!2ske!4v1665814732280!5m2!1sen!2ske"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Club Limas Location"
      ></iframe>
    </div>
  );
};

export default Location;

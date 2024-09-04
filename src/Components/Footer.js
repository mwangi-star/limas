import React from 'react';
import '../Css/Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>contact info</h3>
          <a href="tel:+2547 68302868"><i className="fas fa-phone"></i> +254768302868</a>
          <a href="tel:+254798 955 211"><i className="fas fa-phone"></i> +254798 955 211</a>
          <a href="mailto:limashotel@gmail.com"><i className="fas fa-envelope"></i> limashotel@gmail.com</a>
          <a href="https://maps.google.com/?q=Kibomet,+Kitale" target="_blank" rel="noopener noreferrer"><i className="fas fa-map"></i> Kibomet, Kitale</a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="/home" aria-label="Home">
            <i className="fas fa-arrow-right"></i> Home
          </a>
          <a href="/about"><i className="fas fa-arrow-right"></i> About</a>
          <a href="/rooms"><i className="fas fa-arrow-right"></i> Rooms</a>
          <a href="/gallery"><i className="fas fa-arrow-right"></i> Gallery</a>
          <a href="/reservation"><i className="fas fa-arrow-right"></i> Reservation</a>
        </div>
      </div>
      <div className="share">
      <a 
  href="https://www.facebook.com/share/g/VrGVu3EVwNYwf6Kt/" 
  className="fab fa-facebook-f" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Share on Facebook"
></a>

        
      </div>
      <div className="credit">&copy; copyright @ 2024.By Msambweni web developers</div>
    </section>
  );
}

export default Footer;

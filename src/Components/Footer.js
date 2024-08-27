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
          <a href="/home"><i className="fas fa-arrow-right"></i> home</a>
          <a href="/about"><i className="fas fa-arrow-right"></i> about</a>
          <a href="/rooms"><i className="fas fa-arrow-right"></i> rooms</a>
          <a href="/gallery"><i className="fas fa-arrow-right"></i> gallery</a>
          <a href="/reservation"><i className="fas fa-arrow-right"></i> reservation</a>
        </div>
      </div>
      <div className="share">
        <a href="https://www.facebook.com/share/g/VrGVu3EVwNYwf6Kt/ " className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://instagram.com" className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://twitter.com" className="fab fa-twitter" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <div className="credit">&copy; copyright @ 2024.By Msambweni web developers</div>
    </section>
  );
}

export default Footer;

import React from 'react';
import '../Css/Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>contact info</h3>
          <a href="tel:+2547 68302868"><i className="fas fa-phone"></i> +254768-302-868</a>
          <a href="tel:+254798 955 211"><i className="fas fa-phone"></i> +254798-955-211</a>
          <a href="mailto:limashotel@gmail.com"><i className="fas fa-envelope"></i> limashotel@gmail.com</a>
          <a href="https://www.google.com/maps/place/Club+limas,+hotel+and+accomodation/@1.0355365,35.0251838,16z/data=!4m10!1m2!2m1!1sclub+limas+kitale!3m6!1s0x1782279d1ad61f7b:0xc538e21a7d7f8896!8m2!3d1.0352417!4d35.0309186!15sChFjbHViIGxpbWFzIGtpdGFsZZIBBGNsdWLgAQA!16s%2Fg%2F11j93wg32q?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><i className="fas fa-map"></i> Club limas, Kitale</a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="/home" aria-label="Home"><i className="fas fa-arrow-right"></i> Home</a>
          
          <a href="/about"><i className="fas fa-arrow-right"></i> About</a>
          <a href="/rooms"><i className="fas fa-arrow-right"></i> Rooms</a>
          <a href="/gallery"><i className="fas fa-arrow-right"></i> Gallery</a>
          
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

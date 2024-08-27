import React from 'react';
import '../Css/Reservations.css';
function Reservation() {
  return (
    <section className="reservation" id="reservation">
      <h1 className="heading">book now</h1>
      <form>
        <div className="container">
          <div className="box">
            <p>name <span>*</span></p>
            <input type="text" className="input" placeholder="Your Name" />
          </div>
          <div className="box">
            <p>email <span>*</span></p>
            <input type="text" className="input" placeholder="Your Email" />
          </div>
          <div className="box">
            <p>check in <span>*</span></p>
            <input type="date" className="input" />
          </div>
          <div className="box">
            <p>check out <span>*</span></p>
            <input type="date" className="input" />
          </div>
          <div className="box">
            <p>adults <span>*</span></p>
            <select name="adults" className="input">
              <option value="1">1 adult</option>
              <option value="2">2 adults</option>
              <option value="3">3 adults</option>
              <option value="4">4 adults</option>
              <option value="5">5 adults</option>
              <option value="6">6 adults</option>
            </select>
          </div>
          <div className="box">
            <p>children <span>*</span></p>
            <select name="child" className="input">
              <option value="1">1 child</option>
              <option value="2">2 children</option>
              <option value="3">3 children</option>
              <option value="4">4 children</option>
              <option value="5">5 children</option>
              <option value="6">6 children</option>
            </select>
          </div>
          <div className="box">
            <p>rooms <span>*</span></p>
            <select name="rooms" className="input">
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="6">6 rooms</option>
            </select>
          </div>
          <div className="box">
            <p>room type <span>*</span></p>
            <select name="type" className="input">
              <option value="1">exclusive rooms</option>
              <option value="2">family rooms</option>
              <option value="3">daily rooms</option>
              <option value="4">panoramic rooms</option>
            </select>
          </div>
        </div>
        <input type="submit" value="check availability" className="btn" />
      </form>
    </section>
  );
}

export default Reservation;


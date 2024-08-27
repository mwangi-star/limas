import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactForm from './Components/ContactForm';
import Home from './Components/Home';
import About from './Components/About';
import Rooms from './Components/Rooms';
import Gallery from './Components/Gallery';
import Review from './Components/Review';
import Location from './Components/Location';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Location />
      <Footer />
    </Router>
  );
}

export default App;

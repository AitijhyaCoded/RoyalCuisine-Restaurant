import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Review from './components/Review';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import Events from './components/Events';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';

const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    console.log('Booking triggered');
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <div>
        <Navbar onBooking={handleBooking} />
        <div id="home">
          <Home onBooking={handleBooking}/>
        </div>

        <div id="menu">
          <Menu/>
        </div>
        <div id="reservations">
          <Reservations onBooking={handleBooking}/>
        </div>
        
        <div id="events">
          <Events/>
        </div>
        <div id="reviews">
          <Review/>
        </div>
        <div id="contact">
          <Contact/>
        </div>

        <Footer />
        {isBookingOpen && <BookingForm onClose={() => setIsBookingOpen(false)} />}
      </div>
    </Router>
  );
};

export default App;

import React from 'react'
import EventCard from '../layouts/EventCard'
import BookingForm from './BookingForm'
import { useState } from 'react'

const Events = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    console.log('Booking triggered');
    setIsBookingOpen(true);
  };

  return (
    <div id='scroll-target' className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
    <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Upcoming Events</h1>

    <div className='flex flex-wrap gap-8 justify-center'>
      <EventCard onBooking={handleBooking} img="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" title="Wine Tasting Evening" details="Join our sommelier for an evening of fine wines paired with canapés" date="24th Dec, 2024"/>
      <EventCard onBooking={handleBooking} img="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" title="Chef's Table Experience" details="An intimate dining experience with head chef's special tasting menu" date="2nd Jan, 2025"/>
      

    </div>
    {isBookingOpen && <BookingForm onClose={() => setIsBookingOpen(false)} />}
  </div>
  
  )
}

export default Events

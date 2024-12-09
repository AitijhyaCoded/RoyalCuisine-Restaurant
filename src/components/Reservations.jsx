import React from 'react'
import Button from '../layouts/Button'
import { Link } from 'react-scroll'

const Reservations = ({onBooking}) => {

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-4">
      <img className='w-1/2' src='table.jpg' alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start ">
          Make a Reservation
        </h1>
        <p>
        Plan your perfect dining experience with our easy-to-use reservation system. Select your preferred date, time, and table to ensure everything is ready just for you. Whether it's a cozy dinner, a celebration, or a casual meet-up, we've got you covered—reserve now and let us handle the rest!
        </p>

        <div className=" flex justify-center lg:justify-start">
        <button onClick={onBooking} className="px-6 py-1 rounded-full bg-red-700 text-white hover:bg-red-700 hover:border-red-700 hover:bg-opacity-80 transition-all">
          Book a Table
        </button>


        </div>
      </div>
    </div>
  )
}

export default Reservations

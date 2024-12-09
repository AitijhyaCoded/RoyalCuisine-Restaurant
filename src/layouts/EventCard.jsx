import React from 'react'
import Button from './Button'

const EventCard = ({ img, title, details, date, onBooking }) => {
  return (
    <div className='bg-red-300 bg-opacity-30 w-full lg:w-1/4 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
    <img className='rounded-xl ' src={img} alt='img'/>
    <div className='space-y-4'>
      <h3 className='font-semibold text-center text-xl pt-6'>{title}</h3>
      <div>
        <p className='text-red-700 font-medium'>
            {details}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center gap-4'>
          <h3 className='font-semibold text-lg'>{date}</h3>
          <button onClick={onBooking} className="px-6 py-1 rounded-full bg-red-700 text-white hover:bg-red-700 hover:border-red-700 hover:bg-opacity-80 transition-all">
            Book Now
          </button>
      </div>
    </div>
  </div>
  )
}

export default EventCard

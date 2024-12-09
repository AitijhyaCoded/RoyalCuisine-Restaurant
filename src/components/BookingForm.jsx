import React, { useState } from 'react';
import Button from '../layouts/Button'
import { IoCloseCircle } from 'react-icons/io5';

const BookingForm = ({ onClose }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        date: '',
        time: '',
        number: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Table for ${formData.number} booked successfully for:\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nDetails will be sent to ${formData.email} within 24 hours.`);
        if (onClose) onClose();
      };

  return (
    <section id='bookingform' className=' fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80'>
        <aside className='p-7 bg-red-300 bg-opacity-30 backdrop-blur-sm rounded-2xl w-full max-w-[450px] shadow-md relative'>

        
            <h2 className='text-white text-center text-2xl font-semibold'>Book a Table</h2>
            <div className='text-white absolute -right-4 -top-2 cursor-pointer'>
        <IoCloseCircle onClick={onClose} size={32}/>
        </div>
            <form onSubmit={handleSubmit}>
                <div className='my-3'>
                    <h4 className='text-white font-semibold text-sm mb-1'>Name</h4>
                    <input type='text' placeholder='Enter your name' className='w-full text-base px-3 py-1.5 rounded shadow-md outline-none'  value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required/>
                </div>
                <div className='my-3'>
                    <h4 className='text-white font-semibold text-sm mb-1'>Email-Id</h4>
                    <input type='email' placeholder='Enter your email' className='w-full text-base px-3 py-1.5 rounded shadow-md outline-none' value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required/>
                </div>
                <div className='my-3'>
                    <h4 className='text-white font-semibold text-sm mb-1'>Phone no.</h4>
                    <input type='tel' placeholder='Enter your contact no.' className='w-full text-base px-3 py-1.5 rounded shadow-md outline-none' value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required/>
                </div>
                <div>
                    <div className='my-3'>
                        <h4 className='text-white font-semibold text-sm mb-1'>Date</h4>
                        <input type='date' className='w-1/2 text-base px-3 py-1.5 rounded shadow-md outline-none'  value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                required/>
                    </div>
                    <div className='my-3'>
                        <h4 className='text-white font-semibold text-sm mb-1'>Time</h4>
                        <input type='time' className='w-1/2 text-base px-3 py-1.5 rounded shadow-md outline-none' value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required/>
                    </div>
                </div>
                <div className='my-3'>
                    <h4 className='text-white font-semibold text-sm mb-1'>Number of Guests</h4>
                    <input type='number' min='1' max='10' placeholder='Table for?' className='w-full text-base px-3 py-1.5 rounded shadow-md outline-none' value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                required/>
                </div>
                
                <Button type="submit" title="Submit" />


            </form>
        </aside>
    </section>
  )
}

export default BookingForm

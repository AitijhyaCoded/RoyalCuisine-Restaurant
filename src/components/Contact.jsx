import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-4">
      

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start ">
          Contact Us
        </h1>
        <p>
        At <span className='text-red-700 font-semibold'>RoyalCuisine</span>, we're here to make your experience seamless and delightful. Whether it's placing an order or addressing your queries, we're just a call or message away!
        </p>
        <p>
        <h3 className='font-semibold text-red-700 text-lg'>For Orders</h3>
        📞 Call Us: 033 2981 5096<br />
        📱 WhatsApp Us: +91 877 627 0357
        </p>
        <p>
        <h3 className='font-semibold text-red-700 text-lg'>For Other Queries</h3>
        ✉️ Email Us: <i className='cursor-pointer'>royalCuisine95@gmail.com</i><br />
        📍 Visit Us: <br />
        <i>
        123 Culinary Lane,<br />
        Gourmet City, FL 45678</i>
        </p>
        <div className='flex flex-col lg:flex-row space-x-12'>
        <p className='space-y-2'>
        <h3 className='font-semibold text-red-700 text-lg'>Follow Us</h3>
        🔗<i>@royal_cuisine_95</i> on:
        <div className=" flex justify-center lg:justify-start space-x-4">
        <img src='instagram.png' className='mt-1 h-7 cursor-pointer'/>
        <img src='whatsapp.png' className='h-8 cursor-pointer'/>
        <img src='viber.png' className='mt-1 h-6 cursor-pointer'/>
        <img src='gmail-logo.png' className='h-8 cursor-pointer'/>       
        </div>
        </p>
        <p>
        <h3 className='font-semibold text-red-700 text-lg'>Opening Hours</h3>
        🕒 Monday to Sunday: 10:00 AM - 11:00 PM
        </p>
        
        </div>
        

        
      </div>
      <img className='w-1/2' src='contact.png' alt="img" />
    </div>
  )
}

export default Contact

import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-red-700 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">RoyalCuisine</h1>
          <p className=" text-sm">
          Where flavor meets ambiance—savor every bite, create every memory. 
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#menu"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#reservations"
            >
              Reservations
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#events"
            >
              Events
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#reviews"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#mughlai"
            >
              Mughlai
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#chinese"
            >
              Chinese
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#korean"
            >
              Korean
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#specials"
            >
              Specials
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              royalCuisine95@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +91 877 627 0357
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              033 2981 5096
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              @royal_cuisine_95
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className="font-serif"> Aitijhya Roy</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BiChevronDown } from 'react-icons/bi'
import Button from '../layouts/Button'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = ({onBooking}) => {

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className='backdrop-blur-sm z-50 fixed w-full'>
        <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white bg-opacity-70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
            <span>
                <img src='salad.png' className='h-10 mr-2 '/>
            </span>
            <Link to="home" spy={true} smooth={true} duration={500} className='font-semibold text-xl text-red-700 hover:text-black transition-all  cursor-pointer '>Royal Cuisine</Link>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Home</Link>
                <div className='relative group'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Menu</Link>
                    
                        <BiChevronDown size={32}/>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg py-4 px-8'>
                        <li>
                            <Link to="mughlai" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Mughlai</Link>
                        </li>
                        <li>
                            <Link to="chinese" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Chinese</Link>
                        </li>
                        <li>
                            <Link to="korean" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Korean</Link>
                        </li>
                        <li>
                            <Link to="specials" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Specials</Link>
                        </li>
                    </ul>
                </div>
                <Link to="reservations" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Reservations</Link>
                <Link to="events" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Events</Link>
                <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Reviews</Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer hover:border-b-2 hover:border-red-700'>Contact</Link>
                
                <button onClick={onBooking} className="px-6 py-1 rounded-full bg-red-700 text-white hover:bg-red-700 hover:border-red-700 hover:bg-opacity-80 transition-all">
  Book Now
</button>
            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? 
                    (<AiOutlineClose size={25} onClick={handleChange}/>):(
                        <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                    )
                }
            </div>
        </div>
        <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}> 
        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer' onClick={closeMenu}>Home</Link>

        <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer' onClick={closeMenu}>Menu</Link>

        <Link to="reservations" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all cursor-pointer' onClick={closeMenu}>Reservations</Link>

        <Link to="events" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer' onClick={closeMenu}>Events</Link>

        <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer' onClick={closeMenu}>Contact</Link>

        <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-red-700 transition-all  cursor-pointer' onClick={closeMenu}>Reviews</Link>

        <button onClick={onBooking} className="px-6 py-1 rounded-full bg-red-700 text-white hover:bg-red-700 hover:border-red-700 hover:bg-opacity-80 transition-all">
  Book Now
</button>
        </div>
        </div>
  </div>
  )
}

export default Navbar

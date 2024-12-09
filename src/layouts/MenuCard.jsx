import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Button from './Button'
import { Link } from 'react-scroll'

const MenuCard = (props) => {
  return (
    <div className='bg-red-300 bg-opacity-30 w-full lg:w-1/4 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
      <img className='rounded-xl ' src={props.img} alt='img'/>
      <div className='space-y-4'>
        <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
        <div className='flex flex-row justify-center'>
            <BsStarFill className='text-yellow-500'/>
            <BsStarFill className='text-yellow-500'/>
            <BsStarFill className='text-yellow-500'/>
            <BsStarFill className='text-yellow-500'/>
            <BsStarHalf className='text-yellow-500'/>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
            <h3 className='font-semibold text-lg'>{props.price}</h3>
            <Link to='contact'><Button title="Order Now"/></Link>
            
        </div>
      </div>
    </div>
  )
}

export default MenuCard

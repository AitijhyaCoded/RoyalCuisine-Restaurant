import React from 'react'
import MenuCard from '../layouts/MenuCard'

const Menu = () => {
  return (
    <div id='scroll-target' className=' min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-4'>Our Menu</h1>

      <h2 id='mughlai' className='text-red-700 text-2xl font-semibold text-center pt-4 pb-10'>Mughlai</h2>
      <div className='flex flex-wrap gap-8 justify-center'>
        <MenuCard img="biryani.jpg" title="Chicken Biryani" price="₹149"/>
        <MenuCard img="kebab.jpg" title="Reshmi Kebab" price="₹199"/>
        <MenuCard img="rezala.jpg" title="Mutton Rezala" price="₹249"/>

      </div>

      <h2 id='chinese' className='text-red-700 text-2xl font-semibold text-center pt-10 pb-10'>Chinese</h2>
      <div className='flex flex-wrap gap-8 justify-center'>
      <MenuCard img="chow.jpg" title="Chicken Chowmein" price="₹164"/>
      <MenuCard img="sesame.jpg" title="Sesame Chicken" price="₹299"/>
      <MenuCard img="lemon.jpg" title="Lemon Chicken" price="₹199"/>
      </div>

      <h2 id='korean' className='text-red-700 text-2xl font-semibold text-center pt-10 pb-10'>Korean</h2>
      <div className='flex flex-wrap gap-8 justify-center'>
      <MenuCard img="kimbap.jpg" title="Kimbap" price="₹389"/>
      <MenuCard img="bibimbap.jpg" title="Bibimbap" price="₹549"/>
      <MenuCard img="ramen.jpg" title="Ramen" price="₹474"/>
      </div>

      <h2 id='specials' className='text-red-700 text-2xl font-semibold text-center pt-10 pb-10'>Specials</h2>
      <div className='flex flex-wrap gap-8 justify-center'>
      <MenuCard img="eng-brkfst.jpg" title="Full English Breakfast" price="₹439"/>
      <MenuCard img="chi-din.jpg" title="Exclusive Chinese Dinner" price="₹899"/>
      <MenuCard img="firni.jpg" title="Firni" price="₹99"/>

      </div>
    </div>
  )
}

export default Menu

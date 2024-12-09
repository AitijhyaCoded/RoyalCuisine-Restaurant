import React, {useEffect} from 'react'
import Button from '../layouts/Button'

const Home = ({onBooking}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("scroll-target");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);



  return (
    <div className='body'>

        <div className='relative flex max-lg:flex-col'>
            <div className='animate-fallDown text-center mt-44 absolute min-h-fit flex flex-col justify-between items-center lg:px-32 px-5'>

    <div className='text-white w-full lg:w-2/3 space-y-5'>
      <h1 className=' text-white font-semibold text-6xl'>
          Experience culninary royalty with every bite.
      </h1> 
      <p>
      Good food, great vibes, unforgettable memories—your table is waiting! 🍽✨
      </p>
      <div>
      <button onClick={onBooking} className="px-6 py-1 rounded-full bg-red-700 text-white hover:bg-red-700 hover:border-red-700 hover:bg-opacity-80 transition-all">
  Book a Table
</button>
      </div>
    </div>

    </div>
    

        <div className='grid-flow-col px-0.5'>
        <img className='pt-1' src='home4.png'/>
        <img className='pt-1' src='home2.png'/>
      </div>
      <div className='grid-flow-col px-0.5'>
        <img className='pt-1' src='home3.png'/>
        <img className='pt-1' src='home1.png'/>
      </div>

      
        </div>

        
    </div>
    
  )
}

export default Home

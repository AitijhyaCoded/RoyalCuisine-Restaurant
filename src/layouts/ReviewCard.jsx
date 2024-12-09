import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='bg-red-300 bg-opacity-30 w-full md:w-1/3 border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <div>
        <p className='text-red-700 font-medium'>
            {props.details}
        </p>
      </div>
      <div className='flex flex-row justify-center items-center mt-4 gap-4'>
        <img className='rounded-full w-12' src={props.img} alt='pfp'/>
        <h3 className='font-semibold'>{props.name}</h3>
      </div>
    </div>
  )
}

export default ReviewCard

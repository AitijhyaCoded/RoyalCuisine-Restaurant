import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>
        Customer's Reviews
      </h1>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <ReviewCard img="pfp2.jpeg" name="Rudranil Das" details="An absolute delight for foodies! The dishes were flavorful and beautifully presented, with top-notch service that made the evening extra special. Highly recommend trying their chicken biryani!"/>
        <ReviewCard img="pfp1.png" name="Kim Min Ah" details="Amazing ambiance paired with a fantastic menu—every bite was a treat. The staff were attentive and accommodating, making it a wonderful dining experience. Will definitely return!"/>
        <ReviewCard img="pfp3.jpg" name="Delphenie Green" details="From the warm welcome to the delicious desserts, everything was perfect! The restaurant offers a cozy atmosphere and innovative dishes that are worth every penny. A must-visit spot for any occasion!"/>
      </div>
    </div>
  )
}

export default Review

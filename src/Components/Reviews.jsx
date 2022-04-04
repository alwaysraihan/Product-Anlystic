import React from 'react'
import useReviews from '../hooks/useReviews'
import {StarIcon} from '@heroicons/react/solid'
const Reviews = () => {
    const [reviews] = useReviews()
  return (
      <>
          <h1 className='text-3xl text-center text-blue-600 mt-10 font-bold'>What Our Clinet's Says</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 md:gap-[5%] my-16 px-3 md:px-[10%] lg:px-[15%]'>
          {
              reviews.map(review => 
                
          <div key={review._id} className='border-0 rounded shadow-xl  shadow-gray-300   grid items-center p-5 justify-center hover:shadow-gray-400 relative transition-all delay-75 ease-in-out pb-5'>
              <img   src={review.img} className='w-36 h-36 border border-blue-600 rounded-[50%]' alt="user_profile" />
              <h1 className='text-2xl font-black mt-3  font-mono'>{review.author}</h1>
              <p>{review.text}</p>
              <p>Date: {review.created}</p>
              <div className='absolute bottom-0 right-5  mb-4 flex justify-center items-center'>
              <p> Rate: {review.rating}</p>
              <StarIcon className='w-4 text-yellow-400 ml-3'/>
              </div>
          </div>
                )
          }

      </div>
      </>
  )
}

export default Reviews
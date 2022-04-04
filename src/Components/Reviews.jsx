import React from 'react'
import useReviews from '../hooks/useReviews'

const Reviews = () => {
    const [reviews] = useReviews()
  return (
      <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-3 md:gap-10 lg:gap-16 my-16 px-3 md:px-[10%] lg:px-[15%]'>
          {
              reviews.map(review => 
                
          <div key={review._id} className='border-0 rounded-xl shadow-2xl bg-white shadow-gray-200 grid items-center p-5 justify-center hover:scale-125 transition-all delay-75 ease-in-out'>
              
              <img   src={review.img} className='w-36 h-36 border border-blue-600 rounded-[50%]' alt="user_profile" />
          </div>
                )
          }

      </div>
      </>
  )
}

export default Reviews
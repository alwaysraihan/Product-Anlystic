import React from 'react'
import iPhone from '../assets/image/iphone-13-pro-max-blue-select.png'

const Home = () => {
  return (
      <>
      <div className="home-container my-5 flex justify-center flex-col md:flex-row items-center px-[10%] xl:px-[15%]   gap-5 md:grid-cols-2">
          <div className="left-side md:w-[50%] order-1">
              <h1 className='text-4xl xl:text-5xl font-bold'>Your next phone</h1>
              <h1 className='text-blue-600 my-3 md:my-5 text-4xl  xl:text-5xl font-bold'>Your best phone</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium, aspernatur possimus quae quod similique dicta. Fugiat corrupti necessitatibus voluptatibus!</p>

              
          </div>
          <div className="right-side md:w-[50%] md:order-2">
              <img className='w-full' src={iPhone} alt="iphone 13 pro" />
          </div>
      </div>
      </>
    )
}

export default Home
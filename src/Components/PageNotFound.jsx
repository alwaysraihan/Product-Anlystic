import React from 'react'
import error from '../assets/image/error.gif'

const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center '>
        <div className='h-[50vh]'>
            <img  src={error} alt="error" />
        <h1 className=' text-2xl md:text-3xl lg:text-4xl text-blue-600 text-center'><span className='text-red-400'>404</span> Error. Page Not Found</h1>
        <h1 className=' text-xl md:text-2xl mt-3 lg:text-3xl text-center'>We are sorry but the page you are looking for does not exist !</h1>
        </div>
    </div>
  )
}

export default PageNotFound
import React from 'react'
import {UserIcon, DeviceMobileIcon, CheckCircleIcon} from '@heroicons/react/solid'
const Dashboard = () => {
  return (
      <div className=' px-[5%] md:px-[10%] lg:px-[15%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-10 items-center text-white'>
          <div className='bg-blue-700 border-0 rounded-lg p-5 flex justify-between items-center'>
              <div className="info">
              <h1 className='text-xl font-bold'>1 Billion +</h1>
              <h1 className='text-xl font-bold'>Users</h1>
              </div>
              <UserIcon className='w-10'/>
              
          </div>
          <div className='bg-blue-700 border-0 rounded-lg p-5 flex justify-between items-center'>
              <div className="info">
              <h1 className='text-xl font-bold'>high-quality</h1>
              <h1 className='text-xl font-bold'>materials</h1>
              </div>
              <DeviceMobileIcon className='w-10'/>
              
          </div>
          <div className='bg-blue-700 border-0 rounded-lg p-5 flex justify-between items-center'>
              <div className="info">
              <h1 className='text-xl font-bold'>1231 milion +</h1>
              <h1 className='text-xl font-bold'>Active iPhones</h1>
              </div>
              <CheckCircleIcon className='w-10'/>
              
          </div>
      </div>
  )
}

export default Dashboard
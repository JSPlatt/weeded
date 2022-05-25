import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
      <div className='flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full'>
        <p className='text-base text-green-600 font-semibold'>Delivery</p>
        <div className='8-6 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <MdDeliveryDining className='w-full h-full object-contain' alt='delivery'/>
        </div>
      </div>
        
        <p className='text-[2.5rem] front-bold tracking-wide text-headingColor'>
          Trusted Cannabis Delivery in <span className="text-green-600 text-[3rem]">Your City</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button type='button' className='bg-gradient-to-br from-green-600 to-green-500 rounded-lg w-full md:w-auto px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-100'>
          Order Now
        </button>

      </div>

      <div className="py-2 bg-blue-200 flex-1"></div>
    </div>
  )
}

export default MainContainer
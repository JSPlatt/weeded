import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
      <div className='flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>Delivery</p>
        <div className='w-6 h-6 bg-white rounded-full overflow-hidden'>
          <MdDeliveryDining className='w-full h-full object-contain' alt='delivery'/>
        </div>
      </div>
        
      </div>

      <div className="py-2 bg-blue-200 flex-1"></div>
    </div>
  )
}

export default MainContainer
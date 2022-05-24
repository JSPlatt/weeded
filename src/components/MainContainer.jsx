import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
      <div>
        <MdDeliveryDining/>
        <p>Delivery</p>
      </div>
        
      </div>

      <div className="py-2 bg-blue-200 flex-1"></div>
    </div>
  )
}

export default MainContainer
import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import Hero from '../img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
            <div className='flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full'>
                <p className='text-base text-green-600 font-semibold'>Delivery</p>
                <div className='8-6 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                <MdDeliveryDining className='w-full h-full object-contain' alt='delivery' />
            </div>
        </div>
        
        <p className='text-[2.5rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor'>
          Trusted Cannabis Delivery in <span className="text-green-600 text-[3rem] lg:text-[5rem]">Your City</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        <button 
            type='button' 
            className='bg-gradient-to-br from-green-600 to-green-500 rounded-lg w-full md:w-auto px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-100'
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
       <img 
        src={Hero} 
        className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="Hero-Background" 
        />
       
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 gap-4 flex-wrap'>
            {heroData && heroData.map(n => (
                <div 
                key={n.id} 
                className='w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                    <img src={n.imageSrc} 
                        className="w-40-mt-20 rounded-3xl"
                        alt="cannabis flower"
                     />
                        <p className='text-xl font-semibold text-textColor mt-3'>
                            {n.name}
                        </p>
                        <p className='text-xs text-lighttextGray font-semibold my-3 text-center'>
                            {n.decp}
                        </p>

                        <p className='text-sm font-semibold text-headingColor'>
                            <span className='text-xs text-red-600'>$</span>25.00 - 75.00</p>
                </div>))}
            </div>
        </div>
    </section>
  )
}

export default HomeContainer
import React from 'react';
import Delivery from '../img/delivery.png';

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
      <div className='py-2 flex flex-1 flex-col justify-center items-start
        gap-6
      '>
        <div className='flex items-center gap-2 justify-center px-4 py-1
        bg-orange-100 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden
          drop-shadow-xl'>
            <img src={Delivery} alt="delivery" 
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor
        lg:text-[3.5rem]'>
          The Fastest Delivery in {" "}
          <span className='text-orange-600 text-[3rem] lg:text-[4rem]'>
            Your City
          </span>
        </p>
        <p className='text-base text-textColor text-center md:text-left
        md:w-[80%]'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged.
        </p>
        <button
          type='button'
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full
            px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out 
            duration-100 md:w-auto
          '
        >
          Order Now
        </button>
      </div>
      <div className='py-2 bg-pink-700 flex-1'></div>
    </div>
  )
}

export default MainContainer
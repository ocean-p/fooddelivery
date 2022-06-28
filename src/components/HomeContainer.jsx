import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 gap-2 md:grid-cols-2 w-full' id='home'>
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
          specimen book.
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
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} alt="hero-bg"
          className='ml-auto lg:h-650 lg:w-auto w-full h-420'
        />
        <div className='w-full h-full absolute flex items-center justify-center 
          top-0 left-0 gap-4 flex-wrap lg:px-24 py-4
        '>
          {heroData && heroData.map(n => (
            <div key={n.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md 
              rounded-3xl flex flex-col items-center justify-center
              drop-shadow-lg
            '>
              <img src={n.imageSrc} alt="i1" className='w-20 lg:w-40 
                -mt-10 lg:-mt-20' 
              />
              <p className='text-base lg:text-xl font-semibold text-textColor 
                mt-2 lg:mt-4'>
                {n.name}
              </p>
              <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
                {n.decp}
              </p>
              <p className='text-sm font-semibold text-headingColor'>
                <span className='text-xs text-red-600'>$</span> {n.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
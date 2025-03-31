import React from 'react'
import Button  from './Button'
import { ReactTyped } from "react-typed"
const Hero = () => {
  return (
    <div className='text-white'>
       <div className='w-full  text-center absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]'>
             <p className='uppercase text-primaryColor font-bold md:pt-20 p-2 '>growing with data analytics</p>
             <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-4'>Grow With Data </h1>
             <div className='flex justify-center items-center'>
               <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3 '>flex, flexible financing for</p>
                <ReactTyped
                className='font-bold text-xl sm:text-4xl md:text-5xl text-gray-500 pl-2'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                
             </div>
             <p className='m:text-2xl text-xl px-4 mx-auto  font-bold text-gray-500'>
              Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform.
            </p>
            <Button bgColor={'bg-primaryColor'} width={'w-[200px]'} textColor={'text-black'}/>
       </div>
    </div>
  )
}

export default Hero

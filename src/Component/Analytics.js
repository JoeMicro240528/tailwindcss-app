import React from 'react'
import Iphone from '../assets/blog2.webp'
import Button from './Button'
const Analytics = () => {
  return (
    <div className='w-full h-auto bg-white px-4 py-16 mt-[520px] md:mt-[60%] lg:mt-[43%]'>
      <div className='max-w-[1240px] mx-auto  grid md:grid-cols-2'>
        <img className='w-[80%] mx-auto rounded shadow-md max-h-[400px]  my-4' src={Iphone} alt='Iphone'/>
        <div className='flex flex-col justify-center'>
              <p className='uppercase font-bold text-primaryColor'>Data Analytics Dashboard</p>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Dtat Analytics Centrally</h1>
              <p>
                 Lorim ipsum Dolur Site Centrally Lorim ipsum Dolur Site Centrally
                 Lorim ipsum Dolur Site Centrally Lorim ipsum Dolur Site Centrally
                 Lorim ipsum Dolur Site Centrally Lorim ipsum Dolur Site Centrally 
               </p>
               <Button bgColor={'bg-black ml-0 '} textColor={'text-primaryColor'} width={'w-[250px]'}/>
        </div>
      </div>
    </div>
  )
}

export default Analytics

import React from 'react'
import Button from '../Component/Button'
function Card({img,style ,btnStyle}) {
  return (
    <div className={`${style} w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300`}>
        <img className='bg-transparent w-20 mx-auto mt-[-3rem] bg-white' src={img}/>
        <h2 className='text-2xl text-center font-bold py-8'>    Single User</h2>
        <p className='text-4xl text-center font-bold '>$149</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mt-8 mx-8'>500 GB Storage</p>
            <p className='py-2 border-b  mx-8'>1 Granted User</p>
            <p className='py-2 border-b  mx-8'>send up to 2 GB </p>
        </div>
        <Button data={'Start Trial'}  bgColor={`${btnStyle} w-[200px] px-6 py-3 my-6 `} />
</div>  
  )
}

export default Card
import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Button from './Button';
const Navbar = () => {
      const [nav,setNave]  = useState(false);

      const navHandller = () =>{
          setNave(!nav)
      }
  return (
    <div className='text-white flex justify-between max-w-[1240px] mx-auto h-24 items-center p-4 '>
        <h1 className='w-full text-primaryColor  text-3xl font-semibold'>React.</h1>
        <ul className=' hidden md:flex text-lg lg:mr-[20%] sm:mr-auto'>
            <li className='p-4'><a  href='#' >Home</a></li>
            <li className='p-4'><a  href='#' >Company</a></li>
            <li className='p-4'><a  href='#' >Resources</a></li>
            <li className='p-4'><a  href='#' >About</a></li>
            <li className='p-4'><a  href='#' >Contact</a></li>
        </ul>
         <Button bgColor={'bg-white'} width={'w-[300px] '} textColor ={'text-black'} visiblty={'hidden md:block'}/>
        <div onClick={navHandller} className='block md:hidden' >
             {
              !nav?<AiOutlineMenu size={24}/>:<AiOutlineClose size={24}/>
             }
        </div>
        <div className={!nav?'fixed left-[-100%] ease-in-out duration-500':'z-50 fixed h-full border-r border-r-gray-900 w-[60%] top-0 left-0 bg-[#000300] ease-in-out duration-500'}>
        <h1 className='w-full text-primaryColor text-3xl px-4 font-semibold m-4'>React.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-b-gray-600'><a  href='#' >Home</a></li>
                <li className='p-4 border-b border-b-gray-600'><a  href='#' >Company</a></li>
                <li className='p-4 border-b border-b-gray-600'><a  href='#' >Resources</a></li>
                <li className='p-4 border-b border-b-gray-600'><a  href='#' >About</a></li>
                <li className='p-4'><a  href='#' >Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

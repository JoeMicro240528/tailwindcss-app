import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
       <div>
       <h1 className='w-full text-primaryColor  text-3xl font-bold'>React.</h1>
       <p className='py-4'>
            Lorim ipsum Dolur Site Centrally Lorim ipsum Dolur Site Centrally
            Lorim ipsum Dolur Site Centrally Lorim ipsum Dolur Site Centrally
           
       </p>
       <div className='flex justify-between my-6 md:w-[75%]'>
          <FaFacebookSquare className='hover:text-blue-700' size={30}/>
          <FaInstagramSquare className='hover:text-red-400' size={30}/>
          <FaTwitterSquare className='hover:text-blue-500' size={30}/>
          <FaGithubSquare className='hover:text-primaryColor'size={30}/>
          <FaDribbbleSquare className='hover:text-red-700' size={30}/>
       </div>
       </div>
       <div className='lg:col-span-2 mt-6 flex justify-between'>
            <div>
                <h6 className='text-gray-400 font-medium'> Solutions </h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commrce</li>
                    <li className='py-2 text-sm'>Insights</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400 font-medium'> Support </h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400 font-medium'> Company </h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='text-gray-400 font-medium'> Legal </h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Footer
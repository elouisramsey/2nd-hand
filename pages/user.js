import React from 'react'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import { GrShop, GrUserSettings } from 'react-icons/gr'
import { GiSellCard } from 'react-icons/gi'
import Link from 'next/link'

const User = () => {
  return (
    <>
      <Head />
      <Navigation />
      <div className='grid md:grid-cols-3 gap-8 lg:px-16 py-8'>
        <div className='shadow-lg bg-white'>
          <div className='flex flex-col'>
            {' '}
            <div className='flex flex-col items-center justify-center my-6'>
              <div className='bg-transparent overflow-hidden rounded-full  border-4 h-32 w-32 border-transparent'>
                {' '}
                <img
                  src='/ozi.jpg'
                  alt='Profile Picture'
                  className=' object-cover max-w-full'
                />
              </div>
              <p className='text-gray-600 text-base lg:text-lg capitalize mt-6'>
                the weird nigga
              </p>
            </div>
            <div className='divide-y divide-gray-300 px-8'>
              <Link href='/'>
                <a className='flex items-center py-8 text-gray-600 text-sm lg:text-base capitalize hover:text-glight transition duration-500 ease-in-out'>
                  <GrShop className='text-black text-3xl mr-4' />
                  My Adverts
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center py-8 text-gray-600 text-sm lg:text-base capitalize hover:text-glight transition duration-500 ease-in-out'>
                  <GrUserSettings className='text-black text-3xl mr-4' />
                  settings
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center py-8 text-gray-600 text-sm lg:text-base capitalize hover:text-glight transition duration-500 ease-in-out'>
                  <GiSellCard className='text-black text-3xl mr-4' />
                  sell
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className=''>1 </div>
        <div className=''>2</div>
      </div>
    </>
  )
}

export default User

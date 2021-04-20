import React, { useContext } from 'react'
import Link from 'next/link'
import { DataContext } from './contexts/dataContext'

const New = () => {
  const data = useContext(DataContext)
  return (
    <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
      <h1 className='text-lg flex justify-center items-center font-normal mb-4 text-black font-medium md:text-4xl uppercase mt-6'>
        new arrivals
      </h1>
      <div className='border-b-2 border-solid border-bordercr mx-auto w-20' />
      <div className='md:grid-cols-4 grid md:gap-x-6 md:gap-y-8 my-12'>
        {data?.map((item) => (
          <div
            className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6 lg:mb-0'
            key={item._id}
          >
            <Link href={'/category/' + item.category + '/' + item._id}>
              <a className=''>
                <div className='relative r-0 t-0'>
                  <img
                    src={item.image[0]}
                    alt={item.nameofitem}
                    width={500}
                    height={500}
                  />
                  <div className='rounded-full h-16 w-16 flex items-center justify-center absolute bg-red-700 text-white font-light text-xs -top-4 -left-4 new'>
                    NEW
                  </div>
                </div>
              </a>
            </Link>
            <div className='py-4 px-2'>
              <h1 className='text-gray-900 font-medium text-xl capitalize truncate'>
                {item.nameofitem}
              </h1>
              <p className='mt-2 text-gray-600 text-sm truncate'>
                {item.description}
              </p>
              <div className='flex item-center justify-between mt-3'>
                <h1 className='text-gray-700 font-light text-xl'>
                  {'\u20A6'}
                  {item.price.toLocaleString()}
                </h1>
                <Link href={'tel:+234' + item.phone}>
                  <a className='px-3 py-2 bg-transparent text-xs font-medium capitalize rounded text-gray-600 hover:text-black border border-solid border-bordercr flex items-center justify-center transition duration-500 ease-in-out'>
                    Contact Seller
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center'>
        <Link href='#'>
          <a className='px-3 py-2 bg-transparent text-xs font-medium capitalize rounded text-gray-600 hover:text-black border border-solid border-bordercr flex items-center justify-center transition duration-500 ease-in-out'>
            view more
          </a>
        </Link>
      </div>
    </div>
  )
}

export default New

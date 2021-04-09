import React from 'react'
import Link from 'next/link'

const Featured = ({ data }) => {
  return (
    <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
      <h1 className='text-lg flex justify-center items-center font-bold mb-4 text-black font-medium md:text-4xl uppercase'>
        featured products
      </h1>
      <div className='md:grid-cols-4 grid md:gap-x-6 md:gap-y-8 my-12'>
        {data ? (
          data.slice(4, 8).map((item) => (
            <div
              className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'
              key={item.sys.id}
            >
              <Link href={`${item.fields.nameofitem}`}>
                <a className=''>
                  <img
                    src={item.fields.picturesofitem[0].fields.file.url}
                    alt={item.fields.nameofitem}
                    width={500}
                    height={500}
                  />
                </a>
              </Link>
              <div className='py-4 px-2'>
                <h1 className='text-gray-900 font-medium text-xl capitalize truncate'>
                  {item.fields.nameofitem}
                </h1>
                <p className='mt-2 text-gray-600 text-sm truncate'>
                  {item.fields.description}
                </p>
                <div className='flex item-center justify-between mt-3'>
                  <h1 className='text-gray-700 font-medium text-xl'>
                    {'\u20A6'}
                    {item.fields.price.toLocaleString()}
                  </h1>
                  <Link href={'tel:+234' + item.fields.phone}>
                    <a className='px-3 py-2 bg-gray-800 text-white text-xs font-medium capitalize rounded hover:bg-white hover:text-black hover:border border-solid border-black flex items-center justify-center'>
                      Contact Seller
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-sm md:text-2xl text-grey md:w-4/5 mb-12 font-light md:leading-7'>
            Loading
          </p>
        )}
      </div>
    </div>
  )
}

export default Featured

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='md:px-28 px-8 bg-black py-4 md:py-28'>
        <div className='md:grid-cols-4 grid'>
          <div className='my-2'>
            <h1 className='text-white font-bold text-base lg:text-xl capitalize mb-4'>
              about us
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    about ihe ejigoro
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    career
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    terms & conditions
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    privacy policy
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    biling policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='my-2'>
            <h1 className='text-white font-bold text-base lg:text-xl capitalize mb-4'>
              support
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    support@iheejigoro.com
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    safety tips
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    contact us
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='my-2'>
            <h1 className='text-white font-bold text-base lg:text-xl capitalize mb-4'>
              resources
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    blog
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    facebook
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    YouTube
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    twitter
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    instagram
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='my-2'>
            <h1 className='text-white font-bold text-base lg:text-xl capitalize mb-4'>
              hot links
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    brand
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    sellers
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    regions
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight  text-xs lg:text-sm'>
                    iheejigoro africa
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex py-3 justify-center items-center bg-gdarker text-tiny lg:text-xs text-white'>
        © 2021 Ihe Ejigoro by Louis-Ramsey. All rights reserved.
      </div>
    </>
  )
}

export default Footer

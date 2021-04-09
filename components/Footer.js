import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='md:px-28 px-8 bg-black py-4 md:py-28'>
        <div className='md:grid-cols-4 grid'>
          <div className=''>
            <h1 className='text-white font-bold text-xl capitalize mb-4'>
              about us
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>
                    about ihe ejigoro
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>career</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>
                    terms & conditions
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>privacy policy</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>biling policy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h1 className='text-white font-bold text-xl capitalize mb-4'>
              support
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>
                    support@iheejigoro.com
                  </a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>safety tips</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>contact us</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h1 className='text-white font-bold text-xl capitalize mb-4'>
              resources
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>blog</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>facebook</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>YouTube</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>twitter</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>instagram</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h1 className='text-white font-bold text-xl capitalize mb-4'>
              hot links
            </h1>
            <ul className='flex flex-col'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>brand</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-2'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>sellers</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>regions</a>
                </Link>
              </li>
              <li className='font-light h-full text-sm hover:text-glight flex items-center py-2 capitalize'>
                <Link href='/'>
                  <a className='text-white hover:text-glight'>
                    iheejigoro africa
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex py-3 justify-center items-center bg-gdarker text-xs text-white'>
        © 2021 Ihe Ejigoro. All rights reserved.
      </div>
    </>
  )
}

export default Footer

import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../components/contexts/auth'

const Navigation = ({ categories }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()
  const cate = categories

  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
      <header className='w-full bg-hero'>
        <nav>
          <div className='md:px-28 bg-white flex flex-wrap items-center md:flex-no-wrap justify-between py-4'>
            <div className='ml-8 md:ml-0'>
              <Link href='/'>
                <a className=' dif text-5xl text-black uppercase'>
                  ihe ejigoro
                </a>
              </Link>
            </div>
            <div className='flex border border-solid border-glight w-2/5 h-10 overflow-hidden justify-between'>
              <input
                type='text'
                placeholder='Search for items'
                className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm outline-none focus:outline-none focus:ring-transparent w-full focus:border-0 focus-border-transparent border-transparent'
              />
              <span className='z-10 h-full font-normal text-center text-white items-center justify-center bg-black'>
                <button className='bg-black text-white font-medium capitalize text-sm px-6 h-full outline-none focus:outline-none'>
                  search
                </button>
              </span>
            </div>
            <div className='flex divide-x divide-gdark'>
              {isAuthenticated ? (
                <>
                  <a
                    href='http://localhost:7000/logout'
                    className='group relative text-xs md:text-sm text-gdark hover:text-glight focus:outline-none font-medium transition duration-500 ease-in-out capitalize pl-4'
                  >
                    logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href='http://localhost:7000/login'
                    className='group relative text-xs md:text-sm text-gdark hover:text-glight focus:outline-none font-medium transition duration-500 ease-in-out capitalize pr-4'
                  >
                    sign in
                  </a>
                  <a
                    href='http://localhost:7000/login'
                    className='group relative text-xs md:text-sm text-gdark hover:text-glight focus:outline-none font-medium transition duration-500 ease-in-out capitalize pl-4'
                  >
                    register
                  </a>
                </>
              )}
            </div>
            <div className='ml-auto md:hidden mr-4'>
              <button
                className='flex items-center h-6 w-6 outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className='h-full w-full'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              'w-full md:flex justify-start bg-black lg:px-28 px-8 md:h-12' +
              (navbarOpen ? 'block' : ' hidden')
            }
          >
            <ul className='relative inline-flex md:items-center md:h-full w-1/7 justify-between'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-4 text-black'>
                <Link href='/Furniture'>
                  <a className='text-white hover:text-glight'>all</a>
                </Link>
              </li>
              {cate
                ? cate.map((link) => (
                    <li
                      className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-4 text-black'
                      key={link.fields.category}
                    >
                      <Link href={'/category/' + link.fields.category}>
                        <a className='text-white hover:text-glight'>
                          {link.fields.category}
                        </a>
                      </Link>
                    </li>
                  ))
                : 'loading'}
              <li
                className={
                  'font-light h-full text-sm hover:text-glight capitalize flex items-center py-4' +
                  (router.pathname === '/contact' ? ' active' : ' text-black ')
                }
              >
                <Link href='/contact'>
                  <a className='text-white hover:text-glight'>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navigation

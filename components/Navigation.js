import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../components/actions/authActions'
import { DataContext } from './contexts/dataContext'
import { FaTimes, FaUser } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()

  const data = useContext(DataContext)
  // GET DIFFERENT CATEGORIES
  const uniqIds = {}
  const cate = data?.filter(
    (o) => !uniqIds[o.category] && (uniqIds[o.category] = true)
  )

  const onLogoutClick = (e) => {
    e.preventDefault()
    props.logoutUser()
  }

  return (
    <>
      <header className='w-full bg-hero'>
        <nav>
          <div className='md:px-20 bg-white flex flex-wrap items-center md:flex-no-wrap justify-between py-4'>
            <div className='ml-4 lg:ml-8 md:ml-0'>
              <Link href='/'>
                <a className=' dif text-base lg:text-5xl text-black uppercase'>
                  ihe ejigoro
                </a>
              </Link>
            </div>
            <div className='hidden lg:flex border border-solid border-glight w-2/5 h-10 overflow-hidden justify-between'>
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
            <div className='hidden lg:flex divide-x divide-gdark items-center justify-center'>
              {props.auth.isAuthenticated ? (
                <>
                  <button
                    onClick={onLogoutClick}
                    className='group relative text-xs md:text-sm text-gdark hover:text-glight focus:outline-none font-medium transition duration-500 ease-in-out capitalize pl-4'
                  >
                    logout
                  </button>
                </>
              ) : (
                <>
                  <Link href='/login'>
                    <a className='group relative text-xs md:text-sm text-gdark hover:text-glight focus:outline-none font-medium transition duration-500 ease-in-out capitalize pr-4'>
                      sign in
                    </a>
                  </Link>
                  <Link href='/Register'>
                    <a className='group relative text-xs md:text-sm text-gdark hover:text-glight focus:outline-none font-medium transition duration-500 ease-in-out capitalize pl-4'>
                      register
                    </a>
                  </Link>
                </>
              )}
              <Link href='/upload'>
                <a className='bg-black text-white font-medium capitalize text-sm px-6 h-full outline-none text-center flex items-center justify-center focus:outline-none py-2 block ml-4'>
                  upload
                </a>
              </Link>

              <Link href='/user'>
                <a className='text-black font-medium capitalize text-sm pl-2 h-full text-center flex items-center justify-center py-2 block'>
                  <FaUser />
                </a>
              </Link>
            </div>
            <div className='ml-auto md:hidden mr-4 flex items-center '>
              <Link href='/user'>
                <a className='text-black font-medium capitalize text-sm mr-2 h-full text-center flex items-center justify-center py-2 block'>
                  <FaUser />
                </a>
              </Link>
              <button
                className='flex items-center h-6 w-6 outline-none focus:outline-none transition duration-500 ease-in-out'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaTimes
                  className={
                    navbarOpen
                      ? 'block text-2xl text-black transition duration-500 ease-in-out'
                      : 'hidden'
                  }
                />
                <GiHamburgerMenu
                  className={
                    navbarOpen
                      ? 'hidden'
                      : 'block text-2xl text-black transition duration-500 ease-in-out'
                  }
                />
              </button>
            </div>
          </div>
          <div
            className={
              'w-full md:flex justify-start bg-black lg:px-24 px-4 lg:px-8 md:h-12 h-screen pt-2 ' +
              (navbarOpen ? 'block' : ' hidden')
            }
          >
            {props.auth.isAuthenticated ? (
              <div className='lg:hidden flex mt-4 justify-between items-center'>
                <button
                  onClick={onLogoutClick}
                  className='bg-white text-black font-medium capitalize text-sm px-6 h-full outline-none text-center flex items-center justify-center focus:outline-none py-2 block w-full mr-2'
                >
                  logout
                </button>
                <Link href='/upload'>
                  <a className='bg-white text-black font-medium capitalize text-sm px-6 h-full outline-none text-center flex items-center justify-center focus:outline-none py-2 block w-full'>
                    upload
                  </a>
                </Link>
              </div>
            ) : (
              <div className='lg:hidden flex mt-4 justify-between items-center'>
                <Link href='/login'>
                  <a className='bg-white text-black font-medium capitalize text-sm px-6 h-full outline-none text-center flex items-center justify-center focus:outline-none py-2 block w-full mr-2'>
                    sign in
                  </a>
                </Link>
                <Link href='/Register'>
                  <a className='bg-white text-black font-medium capitalize text-sm px-6 h-full outline-none text-center flex items-center justify-center focus:outline-none py-2 block w-full'>
                    register
                  </a>
                </Link>
              </div>
            )}
            <ul className='relative inline-flex md:items-center md:h-full w-1/7 justify-between flex-col md:flex-row mt-4 lg:mt-0'>
              <li className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-4 text-black'>
                <Link href='/Furniture'>
                  <a className='text-white hover:text-glight'>all furnitures</a>
                </Link>
              </li>
              {cate
                ? cate.map((link) => (
                    <li
                      className='font-light h-full text-sm hover:text-glight capitalize flex items-center py-4 text-black'
                      key={link.category}
                    >
                      <Link href={'/category/' + link.category}>
                        <a className='text-white hover:text-glight'>
                          {link.category}
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

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navigation)

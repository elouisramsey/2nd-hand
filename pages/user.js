import React from 'react'
import { GrShop, GrUserSettings } from 'react-icons/gr'
import { GiSellCard } from 'react-icons/gi'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getRandomColor,
  createImageFromInitials
} from '../components/utils/Randomnumb'
import Login from './login'

const User = (props) => {
  const { user } = props.auth
  let imgSrc = ''

  return (
    <>
      {props.auth.isAuthenticated ? (
        <div className='grid md:grid-cols-3 gap-8 lg:px-16 py-8'>
          <div className='shadow-lg bg-white'>
            <div className='flex flex-col'>
              {' '}
              <div className='flex flex-col items-center justify-center my-6'>
                <div className='bg-transparent overflow-hidden rounded-full  border-4 h-32 w-32 border-transparent'>
                  {' '}
                  <img
                    id='preview'
                    src={
                      imgSrc.length <= 0
                        ? createImageFromInitials(
                            500,
                            user.nameofvendor,
                            getRandomColor()
                          )
                        : imgSrc
                    }
                    alt='Profile Picture'
                    className=' object-cover max-w-full'
                  />
                </div>
                <p className='text-gray-600 text-base lg:text-lg capitalize mt-6'>
                  {user.nameofvendor}
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
      ) : (
        <Login />
      )}
    </>
  )
}

User.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps)(User)

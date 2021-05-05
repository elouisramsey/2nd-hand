import React from 'react'
import { GrShop, GrUserSettings } from 'react-icons/gr'
import { GiSellCard } from 'react-icons/gi'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getRandomColor,
  createImageFromInitials
} from '../components/utils/Randomnumb'
import Login from './login'
import Settings from '../components/Settings'

const User = (props) => {
  const [openTab, setOpenTab] = React.useState(1)

  const { user } = props.auth
  let imgSrc = ''

  return (
    <>
      {props.auth.isAuthenticated ? (
        <div className='grid md:grid-cols-3 gap-8 lg:px-16 py-8'>
          <div className='shadow-lg bg-white mx-4'>
            <div className='flex flex-col px-4'>
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
              <div className='divide-y divide-gray-300'>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                  className={
                    'flex items-center py-8  text-sm lg:text-base capitalize hover:text-glight transition duration-500 ease-in-out ' +
                    (openTab === 1 ? 'text-glight' : 'text-gray-600')
                  }
                >
                  <GrShop className='text-black text-3xl mr-4' />
                  My Adverts
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                  className={
                    'flex items-center py-8  text-sm lg:text-base capitalize hover:text-glight transition duration-500 ease-in-out ' +
                    (openTab === 2 ? 'text-glight' : 'text-gray-600')
                  }
                >
                  <GrUserSettings className='text-black text-3xl mr-4' />
                  settings
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                  data-toggle='tab'
                  href='#link3'
                  role='tablist'
                  className={
                    'flex items-center py-8  text-sm lg:text-base capitalize hover:text-glight transition duration-500 ease-in-out ' +
                    (openTab === 3 ? 'text-glight' : 'text-gray-600')
                  }
                >
                  <GiSellCard className='text-black text-3xl mr-4' />
                  sell
                </a>
              </div>
            </div>
          </div>
          <div className='hidden lg:block col-span-2'>
            {' '}
            <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
              1
            </div>{' '}
            <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
              <Settings />
            </div>
          </div>
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

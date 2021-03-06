import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { loginUser } from '../components/actions/authActions'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Login = (props) => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      Router.push('/user') // push user to dashboard when they login
    }
  }, [props.auth.isAuthenticated])

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors)
    }
  }, [props.errors])

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      Router.push('/user') // push user to dashboard when they login
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email: state.email,
      password: state.password
    }
    props.loginUser(userData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <>
      <div className='bg-white flex flex-col items-center px-6 justify-center xl:px-60'>
        {' '}
        <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full my-16'>
          <h2 className='text-lg lg:text-2xl font-normal text-black justify-center text-center my-4'>
            Login to your account
          </h2>
          <form noValidate className='flex flex-col' onSubmit={handleSubmit}>
            <div className='lg:px-16 py-4 lg:py-8 px-2'>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-black'
                />
                <input
                  id='email'
                  autoComplete='off'
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={state.email || ''}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent '
                />
                <span className='text-red-600 text-tiny mt-2'>
                  {errors.email || ''}
                  {errors.emailnotfound || ''}
                </span>
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-black'
                />
                <input
                  id='password'
                  autoComplete='off'
                  type='password'
                  placeholder='Enter your password'
                  name='password'
                  value={state.password || ''}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent '
                />
                <span className='text-red-600 text-tiny'>
                  {errors.password || ''}
                  {errors.passwordincorrect || ''}
                </span>
              </div>

              <div className='flex'>
                <button
                  type='submit'
                  className='group relative py-2 px-8 border-black text-tiny lg:text-xs text-white bg-black focus:outline-none  border-2 border-solid border-gray-black font-medium transition duration-500 ease-in-out hover:bg-white hover:text-black capitalize md:text-base'
                >
                  login
                </button>
              </div>
            </div>
          </form>
          <p className='text-gray-400 text-xs lg:text-sm p-6 justify-center items-center w-full text-center'>
            Don't have an account?
            <span>
              {' '}
              <Link href='/Register'>
                <a className='text-red-600 hover:text-gray-400'>Register</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, { loginUser })(Login)

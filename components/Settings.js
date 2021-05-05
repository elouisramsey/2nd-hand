import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import { updateUser } from './actions/authActions'

const Settings = (props) => {
  const { user } = props.auth
  const [state, setState] = useState({
    nameofvendor: '',
    email: '',
    sex: '',
    state: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors)
    }
  }, [props.errors])

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email: state.email,
      phone: state.phone,
      state: state.state,
      sex: state.sex,
      nameofvendor: state.nameofvendor,
      id: user.id
    }
    props.updateUser(userData)
    console.log(userData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit} noValidate className='flex flex-col'>
        <div className='lg:py-8 md:grid grid-col-2 md:gap-6'>
          <span className='text-sm text-red-600'>{errors.error}</span>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='nameofvendor' />
            <input
              placeholder='Enter your name'
              name='nameofvendor'
              onChange={handleChange}
              value={state.nameofvendor || user.nameofvendor}
              type='text'
              className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent'
            />
          </div>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='email' />
            <input
              placeholder='Enter your email'
              name='email'
              onChange={handleChange}
              value={state.email}
              type='text'
              className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent'
            />
          </div>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='sex' />
            <input
              placeholder='Enter your sex'
              name='sex'
              onChange={handleChange}
              value={state.sex}
              type='text'
              className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent'
            />
          </div>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='nameofvendor' />
            <input
              placeholder='Enter your location'
              name='state'
              onChange={handleChange}
              value={state.state}
              type='text'
              className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent'
            />
          </div>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='phone' />
            <input
              placeholder='Enter your phone number'
              onChange={handleChange}
              value={state.phone}
              type='tel'
              name='phone'
              id='phone'
              className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent'
            />
          </div>
        </div>
        <div className='flex'>
          <button
            type='submit'
            className='group relative py-2 px-8 border-black text-tiny text-white bg-black focus:outline-none  border-2 border-solid border-gray-black font-medium transition duration-500 ease-in-out hover:bg-white hover:text-black'
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  )
}

Settings.propTypes = {
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { updateUser })(Settings)

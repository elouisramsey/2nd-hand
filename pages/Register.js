import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { registerUser } from '../components/actions/authActions'
import Link from 'next/link'

export class Register extends Component {
  constructor() {
    super()
    this.state = {
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  render() {
    return (
      <div className='bg-white flex flex-col items-center justify-center px-6 xl:px-60'>
        <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full my-16'>
          {' '}
          <h2 className='text-lg lg:text-2xl font-normal text-black justify-center text-center my-4'>
            Register as a seller
          </h2>
          <Formik
            initialValues={{
              nameofvendor: '',
              email: '',
              password: '',
              password2: ''
            }}
            validationSchema={Yup.object().shape({
              nameofvendor: Yup.string().required('Name is required'),
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required')
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
                ),
              password2: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
            })}
            onSubmit={(fields) => {
              const newUser = fields

              this.props.registerUser(newUser, this.props.history)
            }}
            render={({ errors, status, touched }) => (
              <Form noValidate className='flex flex-col'>
                <div className='lg:px-16 py-4 lg:py-8 px-2'>
                  {' '}
                  <div className='mb-4 flex flex-col'>
                    <label htmlFor='nameofvendor' />
                    <Field
                      placeholder='Enter your name'
                      name='nameofvendor'
                      type='text'
                      className={
                        'block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent' +
                        (errors.nameofvendor && touched.nameofvendor
                          ? ' text-red-600 text-tiny'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name='nameofvendor'
                      component='div'
                      className='text-red-600 text-tiny'
                    />
                  </div>
                  <div className='mb-4 flex flex-col'>
                    <label htmlFor='email' />
                    <Field
                      name='email'
                      type='text'
                      placeholder='Enter your email'
                      className={
                        'block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent' +
                        (errors.email && touched.email
                          ? ' text-tiny text-red-600'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='text-tiny text-red-600'
                    />
                  </div>
                  <div className='mb-4 flex flex-col'>
                    <label htmlFor='password' />
                    <Field
                      name='password'
                      type='password'
                      placeholder='Enter password'
                      className={
                        'block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent' +
                        (errors.password && touched.password
                          ? ' text-tiny text-red-600'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name='password'
                      component='div'
                      className='text-tiny text-red-600'
                    />
                  </div>
                  <div className='mb-4 flex flex-col'>
                    <label htmlFor='password2' />
                    <Field
                      placeholder='Confirm password'
                      name='password2'
                      type='password'
                      className={
                        'block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 focus:ring-transparent' +
                        (errors.password2 && touched.password2
                          ? ' text-tiny text-red'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name='password2'
                      component='div'
                      className='text-tiny text-red-600'
                    />
                  </div>
                  <div className='flex'>
                    <button
                      type='submit'
                      className='group relative py-2 px-8 border-black text-tiny lg:text-xs text-white bg-black focus:outline-none  border-2 border-solid border-gray-black font-medium transition duration-500 ease-in-out hover:bg-white hover:text-black capitalize md:text-base'
                    >
                      Register
                    </button>
                  </div>
                </div>
              </Form>
            )}
          />
          <p className='text-gray-400 text-xs lg:text-sm p-6 justify-center items-center w-full text-center'>
            Have an account?
            <span>
              {' '}
              <Link href='/login'>
                <a className='text-red-600 hover:text-gray-400'>Login</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { registerUser })(Register)

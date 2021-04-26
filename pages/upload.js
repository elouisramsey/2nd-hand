import React, { useState, useEffect } from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

import Select from 'react-select'
import Login from './login'

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)

// const [image, setImage] = useState(null)
let image = null

const handleFiles = (e) => {
  const file = e.target.files
  image = file
}

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    nameofvendor: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(15, 'Maximum 15 characters')
      .required('Name is Required'),
    address: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Address is Required'),
    nameofitem: Yup.string()
      .min(4, 'Mininum 4 characters')
      .max(15, 'Maximum 15 characters')
      .required('Furniture name is Required'),
    color: Yup.string()
      .min(3, 'Mininum 3 characters')
      .max(15, 'Maximum 15 characters')
      .required('Color is Required'),
    category: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(10, 'Maximum 10 characters')
      .required('Furniture name is Required'),
    phone: Yup.string()
      .matches(phoneRegex, 'Invalid phone')
      .min(10, 'Mininum 10 characters')
      .required('Phone is Required'),
    price: Yup.string()
      .min(4, 'Mininum 4 characters')
      .max(7, 'Maximum 7 characters')
      .required('Price is Required'),
    description: Yup.string()
      .min(50, 'Mininum 50 characters')
      .required('Description is Required'),
    state: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required()
    })
  }),
  mapPropsToValues: (props) => ({
    category: '',
    description: '',
    nameofitem: '',
    nameofvendor: '',
    phone: '',
    address: '',
    price: '',
    state: [],
    color: ''
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    const data = new FormData()

    for (let x = 0; x < image.length; x++) {
      data.append('image', image[x])
    }

    data.append('category', values.category)
    data.append('description', values.description)
    data.append('nameofitem', values.nameofitem)
    data.append('nameofvendor', values.nameofvendor)
    data.append('phone', values.phone)
    data.append('address', values.address)
    data.append('price', values.price)
    data.append('color', values.color)
    data.append('state', values.state.value)

    return fetch('https://iheejigoro.herokuapp.com/product', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json'
      }),
      body: data
    })
      .then(setSubmitting(false))
      .then(resetForm())
  },
  displayName: 'MyForm'
})

const MyForm = (props) => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting
  } = props

  return (
    <>
      <h2 className='text-2xl capitalize font-normal text-black justify-center text-center my-12 px-8'>
        upload what you want to sell
      </h2>
      <div className='bg-white flex flex-col items-center justify-center xl:px-60 my-4'>
        <>
          <form
            encType='multipart/form-data'
            className='w-full'
            onSubmit={handleSubmit}
          >
            <div className='md:gap-2 md:grid md:grid-cols-2'>
              {' '}
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='nameofvendor'
                  className='block text-sm font-medium text-black'
                />
                <input
                  id='nameofvendor'
                  autoComplete='off'
                  type='text'
                  placeholder='Full name'
                  name='nameofvendor'
                  value={values.nameofvendor}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-transparent '
                />
                {errors.nameofvendor && touched.nameofvendor && (
                  <p className='text-red-600 text-xs'>{errors.nameofvendor}</p>
                )}
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='nameofitem'
                  className='block text-sm font-medium text-black'
                />
                <input
                  autoComplete='off'
                  required
                  type='text'
                  placeholder='Name of item'
                  name='nameofitem'
                  id='nameofitem'
                  value={values.nameofitem}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-transparent '
                />
                {errors.nameofitem && touched.nameofitem && (
                  <p className='error text-red-600 text-xs'>
                    {errors.nameofitem}
                  </p>
                )}
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-black'
                />
                <input
                  autoComplete='off'
                  required
                  type='text'
                  placeholder='Your location: Lekki, Ikeja, Gwarinpa, Aba, Jos...'
                  name='address'
                  id='address'
                  value={values.address}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-transparent '
                />
                {errors.address && touched.address && (
                  <p className='error text-red-600 text-xs'>{errors.address}</p>
                )}
              </div>
              <div className='mb-4 flex flex-col'>
                <MySelect
                  value={values.state}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.state}
                  touched={touched.state}
                />
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-black'
                />
                <div className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11 bg-input capitalize focus:ring-transparent flex items-center'>
                  <p className='px-2'>+234</p>
                  <input
                    autoComplete='off'
                    required
                    type='tel'
                    name='phone'
                    id='phone'
                    value={values.phone}
                    onChange={handleChange}
                    className='block w-full md:text-sm text-tiny text-inputColor bg-transparent focus:outline-none px-2 capitalize focus:ring-transparent h-full focus:outline-none border-transparent py-0 border-0'
                  />
                </div>

                {errors.phone && touched.phone && (
                  <p className='error text-red-600 text-xs'>{errors.phone}</p>
                )}
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium text-black'
                />
                <div className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11 bg-input capitalize focus:ring-transparent flex items-center'>
                  {' '}
                  <p className='px-2'>₦</p>
                  <input
                    autoComplete='off'
                    required
                    type='number'
                    name='price'
                    id='price'
                    value={values.price}
                    onChange={handleChange}
                    className='block w-full md:text-sm text-tiny text-inputColor bg-transparent focus:outline-none px-2 capitalize focus:ring-transparent h-full focus:outline-none border-transparent py-0 border-0'
                  />
                </div>
                {errors.price && touched.price && (
                  <p className='error text-red-600 text-xs'>{errors.price}</p>
                )}
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='category'
                  className='block text-sm font-medium text-black'
                />
                <input
                  autoComplete='off'
                  required
                  type='text'
                  placeholder='Category(Chair, Table, Cooker)'
                  name='category'
                  id='category'
                  value={values.category}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-transparent '
                />
                {errors.category && touched.category && (
                  <p className='error text-red-600 text-xs'>
                    {errors.category}
                  </p>
                )}
              </div>
              <div className='mb-4 flex flex-col'>
                <label
                  htmlFor='color'
                  className='block text-sm font-medium text-black'
                />
                <input
                  autoComplete='off'
                  required
                  type='text'
                  placeholder='color'
                  name='color'
                  id='color'
                  value={values.color}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-transparent '
                />
                {errors.color && touched.color && (
                  <p className='error text-red-600 text-xs'>{errors.color}</p>
                )}
              </div>
              <div className='mb-4 flex flex-col col-span-2'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-black'
                />
                <textarea
                  autoComplete='off'
                  required
                  type='text'
                  placeholder='Describe your product, specifying the color, length and other prpoperties.'
                  name='description'
                  id='description'
                  value={values.description}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-20  bg-input focus:outline-none px-2 focus:ring-transparent '
                />
                {errors.description && touched.description && (
                  <p className='error text-red-600 text-xs'>
                    {errors.description}
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <input
                  required
                  onChange={handleFiles}
                  type='file'
                  accept='image/x-png, image/jpeg, image/jpg, image/JPG'
                  multiple
                  name='image'
                  id='image'
                />
              </div>
            </div>
            <div className='flex'>
              <button
                type='submit'
                className='group relative py-2 px-8 border-black text-tiny text-white bg-black focus:outline-none  border-2 border-solid border-gray-black font-medium transition duration-500 ease-in-out hover:bg-white hover:text-black'
              >
                Submit your product
              </button>
            </div>
          </form>
        </>
      </div>
    </>
  )
}

const options = [
  { value: 'Abia', label: 'Abia' },
  { value: 'Abuja', label: 'Abuja' },
  { value: 'Adamawa', label: 'Adamawa' },
  { value: 'Akwa Ibom', label: 'Akwa Ibom' },
  { value: 'Anambra', label: 'Anambra' },
  { value: 'Bauchi', label: 'Bauchi' },
  { value: 'Bayelsa', label: 'Bayelsa' },
  { value: 'Benue', label: 'Benue' },
  { value: 'Borno', label: 'Borno' },
  { value: 'Cross River', label: 'Cross River' },
  { value: 'Delta', label: 'Delta' },
  { value: 'Ebonyi', label: 'Ebonyi' },
  { value: 'Edo', label: 'Edo' },
  { value: 'Ekiti', label: 'Ekiti' },
  { value: 'Enugu', label: 'Enugu' },
  { value: 'Gombe', label: 'Gombe' },
  { value: 'Imo', label: 'Imo' },
  { value: 'Jigawa', label: 'Jigawa' },
  { value: 'Kaduna', label: 'Kaduna' },
  { value: 'Kano', label: 'Kano' },
  { value: 'Katsina', label: 'Katsina' },
  { value: 'Kebbi', label: 'Kebbi' },
  { value: 'Kogi', label: 'Kogi' },
  { value: 'Kwara', label: 'Kwara' },
  { value: 'Lagos', label: 'Lagos' },
  { value: 'Nasarawa', label: 'Nasarawa' },
  { value: 'Niger', label: 'Niger' },
  { value: 'Ogun', label: 'Ogun' },
  { value: 'Ondo', label: 'Ondo' },
  { value: 'Osun', label: 'Osun' },
  { value: 'Oyo', label: 'Oyo' },
  { value: 'Plateau', label: 'Plateau' },
  { value: 'Rivers', label: 'Rivers' },
  { value: 'Sokoto', label: 'Sokoto' },
  { value: 'Taraba', label: 'Taraba' },
  { value: 'Yobe', label: 'Yobe' },
  { value: 'Zamfara', label: 'Zamfara' }
]

class MySelect extends React.Component {
  handleChange = (value) => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange('state', value)
  }

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('state', true)
  }

  render() {
    return (
      <div className='mb-4 flex flex-col'>
        <label htmlFor='state' />
        <Select
          instanceId='state'
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
          className='block w-full md:text-sm text-tiny border border-solid border-black text-inputColor h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-transparent '
        />
        {!!this.props.error && this.props.touched && (
          <p className='error text-red-600 text-xs'>{this.props.error}</p>
        )}
      </div>
    )
  }
}

const MyEnhancedForm = formikEnhancer(MyForm)

const Upload = (props) => {
  return <>{props.auth.isAuthenticated ? <MyEnhancedForm /> : <Login />}</>
}

Upload.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps)(Upload)

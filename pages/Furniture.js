import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Link from 'next/link'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'secondHand'
  })

  return {
    props: {
      data: data.items
    }
  }
}

const Furniture = ({ data }) => {
  const [furnitures, setFurnitures] = useState(data)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(1000)
  const [color, setColor] = useState('')
  const [location, setLocation] = useState('')

  //   GET MIN AND MAX PRICES
  const min = data.reduce(function (prev, curr) {
    return prev.fields.price < curr.fields.price ? prev : curr
  })
  const max = data.reduce(function (prev, curr) {
    return prev.fields.price > curr.fields.price ? prev : curr
  })

  //   filter with state
  const searchChangeHandler = (e) => {
    setLocation(e.target.value)
    const filteredOptions = data.filter((opt) => {
      return name === ''
        ? opt.fields.state
            .toLowerCase()
            .includes(e.target.value.trim().toLowerCase())
        : opt.fields.state
            .toLowerCase()
            .includes(e.target.value.trim().toLowerCase()) &&
            opt.fields.nameofitem.toLowerCase().includes(name.toLowerCase())
    })
    setFurnitures(filteredOptions)
  }

  //   filter by name
  const onChange = (e) => {
    setName(e.target.value)
    const results = data.filter((res) => {
      const query = name
      return location === ''
        ? res.fields.nameofitem.toLowerCase().includes(query)
        : res.fields.nameofitem.toLowerCase().includes(query) &&
            res.fields.state.toLowerCase().includes(location.toLowerCase())
    })
    setFurnitures(results)
  }

  // search by color

  // filter by amount
  // const ranger = (e) => {
  //   setAmount(e.target.value)
  // }
  return (
    <>
      <Head />
      <Navigation />
      <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
        <h1 className='text-lg flex justify-center items-center font-medium mb-8 text-black font-medium md:text-4xl uppercase'>
          fairly used household equipments
        </h1>
        <div className='grid grid-cols-4 gap-x-3 gap-y-6 my-8'>
          <div className=''>
            {' '}
            <label htmlFor='name' />
            <input
              className='border border-solid text-gray-300 border-gray-300 focus:border-gray-300 p-2 outline-none focus:ring-transparent'
              type='text'
              placeholder='Find furniture by name'
              value={name}
              onChange={onChange}
            />
          </div>
          <select
            className='block w-full md:text-sm text-tiny border border-solid border-gray-300 text-gray-300 h-9 md:h-11 focus:border-transparent bg-input focus:outline-none px-2 focus:ring-gray-300 '
            id='dropdown'
            onChange={searchChangeHandler}
            defaultValue={location}
          >
            <option value=''>-- Pick a state --</option>
            <option value='Abia'>Abia</option>
            <option value='Abuja'>Abuja</option>
            <option value='Adamawa'>Adamawa</option>
            <option value='Akwa Ibom'>Akwa Ibom</option>
            <option value='Anambra'>Anambra</option>
            <option value='Bauchi'>Bauchi</option>
            <option value='Bayelsa'>Bayelsa</option>
            <option value='Benue'>Benue</option>
            <option value='Borno'>Borno</option>
            <option value='Cross Rive'>Cross River</option>
            <option value='Delta'>Delta</option>
            <option value='Ebonyi'>Ebonyi</option>
            <option value='Edo'>Edo</option>
            <option value='Ekiti'>Ekiti</option>
            <option value='Enugu'>Enugu</option>
            <option value='Gombe'>Gombe</option>
            <option value='Imo'>Imo</option>
            <option value='Jigawa'>Jigawa</option>
            <option value='Kaduna'>Kaduna</option>
            <option value='Kano'>Kano</option>
            <option value='Katsina'>Katsina</option>
            <option value='Kebbi'>Kebbi</option>
            <option value='Kogi'>Kogi</option>
            <option value='Kwara'>Kwara</option>
            <option value='Lagos'>Lagos</option>
            <option value='Nasarawa'>Nasarawa</option>
            <option value='Niger'>Niger</option>
            <option value='Ogun'>Ogun</option>
            <option value='Ondo'>Ondo</option>
            <option value='Osun'>Osun</option>
            <option value='Oyo'>Oyo</option>
            <option value='Plateau'>Plateau</option>
            <option value='Rivers'>Rivers</option>
            <option value='Sokoto'>Sokoto</option>
            <option value='Taraba'>Taraba</option>
            <option value='Yobe'>Yobe</option>
            <option value='Zamfara'>Zamfara</option>
          </select>
        </div>
        {furnitures ? (
          <div className='grid grid-cols-4 gap-x-3 gap-y-6'>
            {furnitures.map((item) => (
              <div
                className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6'
                key={item.sys.id}
              >
                <Link
                  href={
                    '/category/' +
                    item.fields.category +
                    '/' +
                    item.fields.nameofitem
                  }
                >
                  <a className=''>
                    <div>
                      <img
                        src={item.fields.picturesofitem[0].fields.file.url}
                        alt={item.fields.nameofitem}
                        width={500}
                        height={500}
                      />
                    </div>
                  </a>
                </Link>
                <div className='my-6 px-2'>
                  <h1 className='text-gray-900 font-medium text-xl capitalize truncate'>
                    {item.fields.nameofitem}
                  </h1>
                  <div className='flex item-center justify-between mt-2'>
                    <h1 className='text-gray-700 font-light text-xl'>
                      {'\u20A6'}
                      {item.fields.price.toLocaleString()}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-600 text-sm truncate'>
            Nothing to display...
          </p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Furniture
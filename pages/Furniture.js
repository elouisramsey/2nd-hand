import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { DataContext } from '../components/contexts/dataContext'

const Furniture = () => {
  const data = useContext(DataContext)
  const [furnitures, setFurnitures] = useState(data)
  const [filteredFurnitures, setFilteredFurnitures] = useState([])
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(1000)
  const [color, setColor] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    let result = furnitures

    const filterByState = (arr) => {
      return arr.filter((item) =>
        item.state.toLowerCase().includes(location.toLocaleLowerCase())
      )
    }

    const filterByName = (arr) => {
      return arr.filter((item) =>
        item.nameofitem.toLowerCase().includes(name.toLocaleLowerCase())
      )
    }
    const filterByColor = (arr) => {
      return arr.filter(
        (item) =>
          item.color.toLowerCase().indexOf(color.toLocaleLowerCase()) !== -1
      )
    }

    result = filterByName(result)
    result = filterByColor(result)
    result = filterByState(result)

    setFilteredFurnitures(result)
  }, [name, color, location])

  return (
    <>
      <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
        <h1 className='text-lg flex justify-center items-center font-normal mb-4 text-black font-medium md:text-4xl uppercase mt-8'>
          all household equipments
        </h1>
        <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 lg:gap-y-6 my-8'>
          <div className=''>
            {' '}
            <label htmlFor='name' />
            <input
              className='border border-solid text-gray-800 border-gray-300 focus:border-gray-300 p-2 outline-none focus:ring-transparent text-xs md:text-sm mb-4 lg:mb-0 w-full'
              type='text'
              placeholder='Find furniture by name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=''>
            {' '}
            <label htmlFor='color' />
            <input
              className='border border-solid text-gray-800 border-gray-300 focus:border-gray-300 p-2 outline-none focus:ring-transparent text-xs md:text-sm mb-4 lg:mb-0 w-full'
              type='text'
              placeholder='Find furniture by color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <select
            className='block w-full md:text-sm text-xs text-tiny border border-solid border-gray-300 text-gray-800 h-full focus:border-transparent bg-input focus:outline-none px-2 focus:ring-gray-300 '
            onChange={(e) => setLocation(e.target.value)}
            defaultValue={location}
          >
            <option value=''>Pick a state</option>
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
        {filteredFurnitures.length > 1 ? (
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 lg:gap-y-6'>
            {filteredFurnitures.map((item) => (
              <div
                className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6'
                key={item._id}
              >
                <Link
                  href={'/category/' + item.category + '/' + item.nameofitem}
                >
                  <a className=''>
                    <div>
                      <img
                        src={item.image[0]}
                        alt={item.nameofitem}
                        width={500}
                        height={500}
                      />
                    </div>
                  </a>
                </Link>
                <div className='my-6 px-2'>
                  <h1 className='text-gray-900 font-medium text-xl capitalize truncate'>
                    {item.nameofitem}
                  </h1>
                  <div className='flex item-center justify-between mt-2'>
                    <h1 className='text-gray-700 font-light text-xl'>
                      {'\u20A6'}
                      {item.price.toLocaleString()}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-600 text-sm truncate text-center'>
            Your search did not return any matches
          </p>
        )}
      </div>
    </>
  )
}

export default Furniture

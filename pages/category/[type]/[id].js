import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { FiPhone } from 'react-icons/fi'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export async function getStaticPaths() {
  const res = await fetch('http://localhost:7000/product/')
  const data = await res.json()
  return {
    paths: data.map((item) => ({
      params: { type: item.category, id: item._id }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:7000/product/${params.id}`)
  const data = await res.json()
  return {
    props: {
      item: data
    }
  }
}

const Id = ({ item }) => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  }

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '4px'
  }
  return (
    <>
      <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
        {item ? (
          <div className='lg:grid lg:grid-cols-2 lg:gap-3 overflow-hidden'>
            <h1 className='text-lg flex justify-center items-center font-normal mb-4 text-black font-medium md:text-4xl uppercase mt-8'>
              item specifications
            </h1>
            <div className='slider-wrapper'>
              <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
              >
                {item.image.map((slide, index) => (
                  <div className='slick-slide' key={index}>
                    <img className='slick-slide-image' src={slide} />
                  </div>
                ))}
              </Slider>
              <div className='thumbnail-slider-wrap'>
                <Slider
                  {...settingsThumbs}
                  asNavFor={nav1}
                  ref={(slider) => setSlider2(slider)}
                >
                  {item.image.map((slide, index) => (
                    <div className='slick-slide' key={index}>
                      <img className='slick-slide-image' src={slide} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className='flex flex-col lg:px-12'>
              <h1 className='text-gray-900 font-bold text-base lg:text-2xl capitalize truncate'>
                {item.nameofitem}
              </h1>
              <h1 className='text-gray-700 font-medium text-sm lg:text-xl'>
                {'\u20A6'}
                {item.price.toLocaleString()}
              </h1>
              <div className='flex justify-between flex-col lg:flex-row'>
                <div className='flex items-center'>
                  <h3 className='my-4 text-gray-900 font-bold text-base capitalize'>
                    Location:{'  '}
                  </h3>
                  <p className='text-gray-600 text-sm lg:py-6 capitalize ml-2'>
                    {item.address}, {item.state}
                  </p>
                </div>
                <div className='flex items-center'>
                  <h3 className='lg:my-4 text-gray-900 font-bold text-base capitalize'>
                    seller:{'  '}
                  </h3>
                  <p className='text-gray-600 text-sm lg:py-6 capitalize ml-2'>
                    {item.nameofvendor}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 text-sm py-6'>{item.description}</p>
              <h1 className='my-4 text-gray-900 font-bold text-base capitalize border-b border-gray-300 border-solid pb-2'>
                specifications
              </h1>
              <ul className='flex flex-col mb-4'>
                <li className='text-sm text-gray-900 font-bold mb-2 capitalize'>
                  color: <span className='text-gray-600 font-light'></span>
                  {item.color}
                </li>
              </ul>

              <Link href={'tel:+234' + item.phone}>
                <a className='py-2 bg-transparent text-xs font-medium capitalize rounded text-gray-600 hover:text-black border border-solid border-bordercr flex items-center justify-center transition duration-500 ease-in-out w-1/2 my-8'>
                  <FiPhone className='text-gray-600 text-xs font-light mx-2' />{' '}
                  Contact Seller
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <p className='text-gray-600 text-sm truncate'>Loading...</p>
        )}
      </div>
    </>
  )
}

export default Id

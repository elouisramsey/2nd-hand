import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { FiPhone } from 'react-icons/fi'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticPaths() {
  const data = await client.getEntries({
    content_type: 'secondHand',
    order: 'sys.createdAt'
  })
  return {
    paths: data.items.map((item) => ({
      params: { type: item.fields.category, id: item.fields.nameofitem }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'secondHand',
    'fields.nameofitem': params.id
  })
  return {
    props: {
      item: data.items[0]
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
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  }
  return (
    <>
      <Navigation />{' '}
      <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
        {item ? (
          <div className='grid md:grid-cols-2 gap-3 overflow-hidden'>
            <div className='slider-wrapper'>
              <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
              >
                {item.fields.picturesofitem.map((slide) => (
                  <div className='slick-slide' key={slide.sys.id}>
                    <img
                      className='slick-slide-image'
                      src={slide.fields.file.url}
                    />
                  </div>
                ))}
              </Slider>
              <div className='thumbnail-slider-wrap'>
                <Slider
                  {...settingsThumbs}
                  asNavFor={nav1}
                  ref={(slider) => setSlider2(slider)}
                >
                  {item.fields.picturesofitem.map((slide) => (
                    <div className='slick-slide' key={slide.sys.id}>
                      <img
                        className='slick-slide-image'
                        src={slide.fields.file.url}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className='flex flex-col px-12'>
              <h1 className='text-gray-900 font-bold text-2xl capitalize truncate'>
                {item.fields.nameofitem}
              </h1>
              <h1 className='text-gray-700 font-medium text-xl'>
                {'\u20A6'}
                {item.fields.price.toLocaleString()}
              </h1>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <h3 className='my-4 text-gray-900 font-bold text-base capitalize'>
                    Location:{'  '}
                  </h3>
                  <p className='text-gray-600 text-sm py-6 capitalize ml-2'>
                    {item.fields.place}, {item.fields.state}
                  </p>
                </div>
                <div className='flex items-center'>
                  <h3 className='my-4 text-gray-900 font-bold text-base capitalize'>
                    seller:{'  '}
                  </h3>
                  <p className='text-gray-600 text-sm py-6 capitalize ml-2'>
                    {item.fields.nameofvendor}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 text-sm py-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                saepe nobis possimus laborum cupiditate vero blanditiis eos
                nesciunt velit veniam alias sed, sapiente cumque? Optio libero
                animi mollitia aliquam autem placeat commodi culpa similique
                laudantium, dolore quibusdam iusto recusandae nulla eveniet
                temporibus illo impedit provident eaque voluptas laborum!
                Inventore, alias?
              </p>
              <h1 className='my-4 text-gray-900 font-bold text-base capitalize border-b border-gray-300 border-solid pb-2'>
                specifications
              </h1>
              <ul className='flex flex-col list-disc'>
                <li className='text-sm text-gray-600 mb-2'>lorem</li>
                <li className='text-sm text-gray-600 mb-2'>heated</li>
                <li className='text-sm text-gray-600 mb-2'>breaer</li>
                <li className='text-sm text-gray-600 mb-2'>trapper</li>
                <li className='text-sm text-gray-600 mb-2'>thinker</li>
              </ul>

              <Link href={'tel:+234' + item.fields.phone}>
                <a className='px-3 py-2 bg-gray-800 text-white text-xs font-bold capitalize rounded hover:bg-white hover:text-black hover:border border-solid border-black flex items-center justify-center my-4 md:w-1/2'>
                  <FiPhone className='text-white text-xs font-bold mr-4' />{' '}
                  Contact Seller
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <p className='text-gray-600 text-sm truncate'>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Id

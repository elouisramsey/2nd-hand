import Head from 'next/head'
import React from 'react'
import Layout from '../../../components/Layout'
import Link from 'next/link'

export async function getStaticPaths() {
  const res = await fetch('https://bkfurnitures.herokuapp.com/product/')
  const data = await res.json()
  return {
    paths: data.map((item) => ({
      params: { type: item.category }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://bkfurnitures.herokuapp.com/product/`)
  let selectedProduct = []

  const data = await res.json()
  data.map((item) => {
    if (item.category === params.type) {
      selectedProduct.push(item)
    }
    return data
  })
  return {
    props: {
      item: selectedProduct
    }
  }
}

const Index = ({ item }) => {
  return (
    <Layout>
      <div className='md:px-28 px-8 bg-white py-8 md:py-28'>
        <h1 className='text-lg flex justify-center items-center font-medium mb-8 text-black font-medium md:text-4xl uppercase'>
          {item ? item[0].category : 'Nothing to display'}s
        </h1>
        {item ? (
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 lg:gap-y-6'>
            {item.map((item) => (
              <div
                className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6'
                key={item._id}
              >
                <Link href={'/category/' + item.category + '/' + item._id}>
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
                  <h2 className='text-gray-400 font-medium text-xs capitalize truncate mb-2'>
                    {item.address}, {item.state}
                  </h2>
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
          <p className='text-gray-600 text-sm truncate'>
            Nothing to display...
          </p>
        )}
      </div>
    </Layout>
  )
}

export default Index

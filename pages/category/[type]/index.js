import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../../../components/Footer'
import Layout from '../../../components/Layout'
import Navigation from '../../../components/Navigation'
import Link from 'next/link'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticPaths() {
  const data = await client.getEntries({
    content_type: 'secondHand'
  })
  return {
    paths: data.items.map((item) => ({
      params: { type: item.fields.category }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'secondHand',
    'fields.category': params.type
  })
  return {
    props: {
      data: data.items
    }
  }
}

const Index = ({ data }) => {
  // GET DIFFERENT CATEGORIES
  const uniqIds = {}
  const categories = data.filter(
    (o) => !uniqIds[o.fields.category] && (uniqIds[o.fields.category] = true)
  )
  return (
    <Layout categories={categories}>
      <div className='md:px-28 px-8 bg-white py-4 md:py-28'>
        <h1 className='text-lg flex justify-center items-center font-medium mb-8 text-black font-medium md:text-4xl uppercase'>
          {data[0].fields.category}s
        </h1>
        {data ? (
          <div className='grid grid-cols-4 gap-x-3 gap-y-6'>
            {data.map((item) => (
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
                  <h2 className='text-gray-400 font-medium text-xs capitalize truncate mb-2'>
                    {item.fields.place}, {item.fields.state}
                  </h2>
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
    </Layout>
  )
}

export default Index

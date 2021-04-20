import React from 'react'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import New from '../components/New'

const Index = () => {
  return (
    <Layout>
      <Hero />
      <New />
      <Featured />
    </Layout>
  )
}

export default Index

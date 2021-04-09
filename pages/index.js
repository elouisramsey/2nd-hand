import React from 'react'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import New from '../components/New'

const client = require('contentful').createClient({
  space: 'eimn9ocdmaxu',
  accessToken: 'srIPCJpj4gQ_vLDSDF1roP26Dw4b3H1R20RJUKikvPs'
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

const Index = ({ data }) => {
  // GET DIFFERENT CATEGORIES
  const uniqIds = {}
  const categories = data.filter(
    (o) => !uniqIds[o.fields.category] && (uniqIds[o.fields.category] = true)
  )
  return (
    <Layout categories={categories} data={data}>
      <Hero />
      <New data={data} />
      <Featured data={data} />
    </Layout>
  )
}

export default Index

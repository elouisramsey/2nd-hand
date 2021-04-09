import '../styles/tailwind.css'
import { AuthProvider, ProtectRoute } from '../components/contexts/auth'
import { DataProvider } from '../components/contexts/dataContext'

const client = require('contentful').createClient({
  space: 'eimn9ocdmaxu',
  accessToken: 'srIPCJpj4gQ_vLDSDF1roP26Dw4b3H1R20RJUKikvPs'
})

function MyApp({ Component, pageProps, data }) {
  return (
    <DataProvider data={data}>
      <AuthProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </AuthProvider>
    </DataProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const data = await client.getEntries({
    content_type: 'secondHand'
  })

  return {
    props: {
      data: data.items
    }
  }
}

export default MyApp

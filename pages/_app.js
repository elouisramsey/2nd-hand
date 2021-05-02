import '../styles/tailwind.css'
import { Provider } from 'react-redux'
import { DataContext } from '../components/contexts/dataContext'
import jwtDecode from 'jwt-decode'
import fetch from 'isomorphic-unfetch'
import setAuthToken from '../components/utils/setAuthToken'
import { setCurrentUser, logoutUser } from '../components/actions/authActions'
import { store } from '../components/store'
import Router from 'next/router'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Footer from '../components/Footer'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, data }) {
  // Check for token to keep user logged in
  const ISSERVER = typeof window === 'undefined'

  if (!ISSERVER) {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken
      setAuthToken(token)
      // Decode token and get user info and exp
      const decoded = jwtDecode(token)
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded))
      // Check for expired token
      const currentTime = Date.now() / 1000 // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser())
        // Redirect to login
        Router.push('/login')
      }
    }
  }

  return (
    <DataContext.Provider value={data}>
      <Provider store={store}>
        <Head />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </DataContext.Provider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const res = await fetch('https://iheejigoro.herokuapp.com/product/')
  const json = await res.json()
  return {
    data: json
  }
}

export default MyApp

import Footer from './Footer'
import Navigation from './Navigation'
import Head from './Head'

const Layout = ({ children, categories, data }) => (
  <>
    <Head />
    <Navigation categories={categories} data={data} />
    {children}
    <Footer />
  </>
)

export default Layout

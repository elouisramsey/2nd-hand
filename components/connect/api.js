import Axios from 'axios'

const urls = {
  test: `http://localhost:7000`,
  development: 'http://localhost:7000/'
  //   production: 'https://your-production-url.com/'
}
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api

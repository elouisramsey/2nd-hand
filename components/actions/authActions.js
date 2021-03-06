import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'
import Router from 'next/router'

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('https://iheejigoro.herokuapp.com/routes/users/register', userData)
    .then((res) => Router.push('/login')) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('https://iheejigoro.herokuapp.com/routes/users/login', userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data
      if (typeof window !== 'undefined') {
        localStorage.setItem('jwtToken', JSON.stringify(token))
      }
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwtDecode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .then(() => Router.push('/user'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// update user
export const updateUser = (userData) => (dispatch) => {
  axios
    .post(
      `https://iheejigoro.herokuapp.com/routes/users/update/${userData.id}`,
      userData
    )
    .then(
      (res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data
        if (typeof window !== 'undefined') {
          localStorage.getItem(token)
        }
        // Set token to Auth header
        setAuthToken(token)
        // Decode token to get user data
        const decoded = jwtDecode(token)
        // Set current user
        dispatch(setCurrentUser(decoded))
      },
      { withCredentials: true }
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  }
}
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwtToken')
  }
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}

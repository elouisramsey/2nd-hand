import authReducer from './authReducers'
import errorReducer from './errorReducers'
import { combineReducers } from 'redux'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
})

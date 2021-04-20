import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../components/reducers/index'

const initialState = {}

export const store = configureStore({
  reducer: rootReducer,
  initialState
})

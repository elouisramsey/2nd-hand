import React, { createContext, useReducer, useCallback } from 'react'

import rootReducer from '../reducers/index'

const initialState = {}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [state, dispatchBase] = useReducer(rootReducer, initialState)

  const dispatch = useCallback(asyncer(dispatchBase, state), [])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

const asyncer = (dispatch, state) => (action) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action)

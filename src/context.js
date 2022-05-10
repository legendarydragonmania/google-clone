import React, { useContext, createContext, useReducer } from 'react'

const ContextProvider = createContext()

const AppProvider = ({ initialState, reducer, children }) => {
  return (
    <ContextProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ContextProvider.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(ContextProvider)
}

export default AppProvider

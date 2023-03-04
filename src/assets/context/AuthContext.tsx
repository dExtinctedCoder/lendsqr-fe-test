import { createContext, useState } from 'react'
import { AuthContextType, AuthContextProviderPropsType } from '../../types/context.type'

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = ({children}: AuthContextProviderPropsType) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    setIsLoggedIn(false)
    window.localStorage.removeItem('lendsqrUser')
  }
  
  const login = () => {
    setIsLoggedIn(true)
  }

  const contextValObj = {
    isLoggedIn,
    setIsLoggedIn,
    logout,
    login
  }

  return (
    <AuthContext.Provider value={contextValObj}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
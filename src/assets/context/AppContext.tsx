import { createContext, useState } from 'react'
import { AppContextType, AppContextProviderPropsType } from '../../types/context.type'

export const AppContext = createContext({} as AppContextType)

const AppContextProvider = ({children}: AppContextProviderPropsType) => {

  const [isMenuOpen, setIsMenuOpen ] = useState(false)
  const [navHeight, setNavHeight] = useState(0)

  const contextValObj = {
    isMenuOpen,
    setIsMenuOpen,
    navHeight,
    setNavHeight,
  }

  return (
    <AppContext.Provider value={contextValObj}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
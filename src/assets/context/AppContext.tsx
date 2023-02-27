import { createContext, useState } from 'react'
import { AppContextType, AppContextProviderPropsType } from '../../types/context.type'

export const AppContext = createContext({} as AppContextType)

const AppContextProvider = ({children}: AppContextProviderPropsType) => {

  const [isMenuOpen, setIsMenuOpen ] = useState(false)

  const contextValObj = {
    isMenuOpen,
    setIsMenuOpen,
  }

  return (
    <AppContext.Provider value={contextValObj}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
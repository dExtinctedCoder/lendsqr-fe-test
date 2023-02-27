export type AuthContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
  login: () => void
}

export type AuthContextProviderPropsType = {
  children: React.ReactNode
}

export type AppContextType = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  navHeight: number
  setNavHeight: React.Dispatch<React.SetStateAction<number>>
}

export type AppContextProviderPropsType = {
  children: React.ReactNode
}

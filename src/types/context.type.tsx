export type AuthContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
  login: () => void
}

export type AuthContextProviderPropsType = {
  children: React.ReactNode
}

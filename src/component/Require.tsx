import { Fragment, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../assets/context/AuthContext"
import { RequireProps } from "../types/utilities.type"

const Require = ({children}: RequireProps) => {

  const {isLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const user = window.localStorage.getItem('lendsqrUser')
  const userObj = user ? JSON.parse(user) : false
  
  if (userObj.isLoggedIn || isLoggedIn) {
    return <Fragment>{children}</Fragment>
  } 
  else {
    navigate('/login')
  }
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [isLoggedIn])

  
  return null
}

export default Require
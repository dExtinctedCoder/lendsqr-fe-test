import {useContext} from 'react'
import { AppContext } from '../assets/context/AppContext'
import Nav from "../component/Nav"
import SideBar from "../component/SideBar"

const Dashboard = () => {

  const {isMenuOpen} = useContext(AppContext)
  return (
    <div>
      <Nav />
      {isMenuOpen && <SideBar />}
      <h1>Dashboard!</h1>
    </div>
  )
}

export default Dashboard
import {useContext, Fragment} from 'react'
import {FiChevronDown} from 'react-icons/Fi'
import { sideBarValues } from "../assets/app-data/SideBarContent"
import { AppContext } from "../assets/context/AppContext"
import '../styles/side-bar.scss'

const SideBar = () => {
  const {isMenuOpen, navHeight} = useContext(AppContext)
  const sideBarStyle: React.CSSProperties = {
    transition: 'all 350ms',
    transform: isMenuOpen ? 'translateX(0vw)' : 'translateX(-100vw)',
    maxHeight: `calc(100vh - ${navHeight}px)`
  }

  return (
    <Fragment>
      <aside style={{maxHeight: `calc(100vh - ${navHeight}px)`}} className="desktop--mode__control">
        <SideBarJsx />
      </aside>
      <aside style={sideBarStyle} className="mobile--mode__control">
        <SideBarJsx />
      </aside>
    </Fragment>
  )
}

export const SideBarJsx =() => {
  return (
    <div className='side--bar'>
      <h4>{sideBarValues.SWITCHORGICON} <span>Switch Organization</span><FiChevronDown fontSize={16} color='#213F7D' /></h4>
      <ul>
        <li>{sideBarValues.DASHBOARDICON} <span>Dashboard</span></li>
        <li>
          <ul>
            <h5>CUSTOMERS</h5>
            {
              sideBarValues.CUSTOMERS.map(({Icon, tittle}) => {
                return (
                  <li key={tittle}>{Icon} <span>{tittle}</span></li>
                )
              })
            }
          </ul>
        </li>
        <li>
          <ul>
            <h5>BUSINESSES</h5>
            {
              sideBarValues.BUSINESSES.map(({Icon, tittle}) => {
                return (
                  <li key={tittle}>{Icon} <span>{tittle}</span></li>
                )
              })
            }
          </ul>
        </li>
        <li>
          <ul>
            <h5>SETTINGS</h5>
            {
              sideBarValues.SETTINGS.map(({Icon, tittle}) => {
                return (
                  <li key={tittle}>{Icon} <span>{tittle}</span></li>
                )
              })
            }
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
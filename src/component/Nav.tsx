import Logo from '../assets/media/logo.svg'
import {IoSearch} from 'react-icons/Io5'
import {AiOutlineCaretDown} from 'react-icons/Ai'
import {IoIosNotificationsOutline} from 'react-icons/Io'
import ProfileImg from '../assets/media/user.png'
import '../styles/_nav.scss'
import { useRef,useContext } from 'react'
import { AppContext } from '../assets/context/AppContext'

const Nav = () => {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}

export const DesktopNav = () => {
  return (
      <div className='desktop--nav__control'>
        <div className='logo__box'>
          <img src={Logo} alt='lendsqr' />
        </div>
        <div className='search__bar--box'>
          <input type="text" name="search__bar" id="search__bar" placeholder='Search for anything' />
          <div><IoSearch fontSize={16} color='#FFF' /></div>
        </div>
        <nav>
          <h5>Docs</h5>
          <div className='alert--icon__box'><IoIosNotificationsOutline fontSize={26} color='#213F7D' /></div>
          <div>
            <div><img src={ProfileImg} alt="" /></div>
            <span>
              <span>Adedeji</span>
              <AiOutlineCaretDown fontSize={16} color='#213F7D' />
            </span>
          </div>
        </nav>
      </div>
  )
}

export const MobileNav = () => {

  const menuBoxRef = useRef<HTMLDivElement>(null)
  const {isMenuOpen, setIsMenuOpen} = useContext(AppContext)
  const toggleMenu = () => {
    menuBoxRef.current?.classList.toggle('open')
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
      <div className='mobile--nav__control'>
        <div className='logo__box'>
          <img src={Logo} alt='lendsqr' />
        </div>
        <nav>
          <h5>Docs</h5>
          <div className='profile--img__box'>
            <div><img src={ProfileImg} alt="" /></div>
            <AiOutlineCaretDown fontSize={16} color='#213F7D' />
          </div>
          <div onClick={() => toggleMenu()} ref={menuBoxRef} className="menu__box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
  )
}


export default Nav
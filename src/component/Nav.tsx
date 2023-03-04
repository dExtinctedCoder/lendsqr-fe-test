import Logo from '../assets/media/logo.svg'
import {IoSearch} from 'react-icons/io5'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {IoIosNotificationsOutline} from 'react-icons/io'
import ProfileImg from '../assets/media/user.png'
import '../styles/_nav.scss'
import { useRef,useContext, useEffect } from 'react'
import { AppContext } from '../assets/context/AppContext'
import { Link } from 'react-router-dom'

const Nav = () => {
  const {setNavHeight} = useContext(AppContext)
  const headerRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headerRef.current && setNavHeight(headerRef.current?.offsetHeight)

  }, [headerRef.current])
  
  return (
    <header ref={headerRef}>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}

export const DesktopNav = () => {
  return (
      <div className='desktop--nav__control'>
        <div className='logo__box'>
          <Link to='/'>
            <img src={Logo} alt='lendsqr' />
          </Link>
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
          <div onClick={() => toggleMenu()} ref={menuBoxRef} className={`menu__box ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
  )
}


export default Nav
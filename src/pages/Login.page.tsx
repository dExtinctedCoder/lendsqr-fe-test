import Logo from '../assets/media/logo.svg'
import BigImg from '../assets/media/hero--img.png'
import '../styles/login.page.scss'
import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../assets/context/AuthContext'

const Login = () => {

  const passwordFieldRef = useRef<HTMLInputElement>(null)
  const defaultUserInfo = {
    email: '',
    password: '',
  }
  const navigate = useNavigate()
  const [userInfo, setuserInfo] = useState(defaultUserInfo)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const {login} = useContext(AuthContext)
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login()
    window.localStorage.setItem('lendsqrUser', JSON.stringify({isLoggedIn: true}))
    navigate("/dashboard")
    setuserInfo(defaultUserInfo)
  }

  return (
    <div className='page__control login__page'>
      <div>
        <div>
          <div className='logo__box'>
            <Link to='/'>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className='hero--img__box'>
            <img src={BigImg} alt="Hero image" />
          </div>
        </div>
        <main>
          <form onSubmit={e => onSubmit(e)}>
            <div>
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <div>
              <div className="field__control">
                <input onChange={e => setuserInfo({...userInfo, email: e.target.value})} value={userInfo.email} type="email" name="email__field" id="email__field" placeholder='Email' required />
              </div>
              <div className="field__control">
                <div className="pass--field__box">
                  <input onChange={e => setuserInfo({...userInfo, password: e.target.value})} value={userInfo.password} type={passwordVisibility === true ? 'text': 'password'} name="password__field" id="password__field" ref={passwordFieldRef} placeholder='Password' required />
                  <span onClick={() => setPasswordVisibility(!passwordVisibility)}>{passwordVisibility ? 'HIDE' : 'SHOW'}</span>
                </div>
                <small>FORGOT PASSWORD?</small>
              </div>
            </div>
            <div>
              <button type="submit">LOG IN</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Login
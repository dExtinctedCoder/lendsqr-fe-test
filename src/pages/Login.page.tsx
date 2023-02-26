import Logo from '../assets/media/logo.svg'
import BigImg from '../assets/media/hero--img.png'
import '../styles/login.page.scss'

const Login = () => {
  return (
    <div className='page__control login__page'>
      <div>
        <div>
          <div className='logo__box'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='hero--img__box'>
            <img src={BigImg} alt="Hero image" />
          </div>
        </div>
        <main>
          <form>
            <div>
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <div>
              <div className="field__control">
                <input type="email" name="email__field" id="email__field" placeholder='Email' required />
              </div>
              <div className="field__control">
                <div className="pass--field__box">
                  <input type="password" name="password__field" id="password__field" placeholder='Password' required />
                  <span>SHOW</span>
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
import { Link } from 'react-router-dom'
import '../styles/_utilities.scss'

const Error = () => {
  return (
    <div className='error__page'>
      <h2>Page not found!</h2>
      <h4><Link to='/'>back to home</Link></h4>
    </div>
  )
}

export default Error
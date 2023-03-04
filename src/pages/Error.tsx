import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Page does not exist</h1>
      <h3><Link to='/'>Go to home</Link></h3>
    </div>
  )
}

export default Error
import { Link } from 'react-router-dom'

function Brand({ to = '/', label = 'Code.clic', onClick }) {
  return (
    <Link className="brand" to={to} onClick={onClick}>
      {label}
    </Link>
  )
}

export default Brand

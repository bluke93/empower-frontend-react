import './Navbar.scss'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link to="/index">Index</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

export default Navbar

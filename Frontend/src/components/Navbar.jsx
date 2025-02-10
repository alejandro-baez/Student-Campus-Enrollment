import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav'>
        <Link to='/'>
            <div>ACME Inc.</div>
        </Link>
        <Link to='/campuses'>
            <div>Campuses</div>
        </Link>
    </div>
  )
}

export default Navbar
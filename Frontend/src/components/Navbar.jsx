import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav'>
        <div className='logo'>
            <Link to='/'>
                <div>ACME Inc.</div>
            </Link>
        </div>
        <Link to='/campuses'>
            <div>Campuses</div>
        </Link>
    </div>
  )
}

export default Navbar
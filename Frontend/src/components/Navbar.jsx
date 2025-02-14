import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/grad-cap.png'

const Navbar = () => {
  return (
    <header className='max-w-[1440px] container mx-auto px-4 py-5 flex justify-between border-b-2 '>
        {/* logo and name */}
        <div >
            <Link to='/' className='flex items-center gap-x-1'>
                <img src={Logo} alt="Grad cap logo" className='w-25' />
                <span className='font-bold text-xl'>ACME EDU</span>
            </Link>
            

        </div>

        {/* nav */}
        <div className='flex items-center w-1/4 gap-3 font-bold divide-x divide-gray-400' >
            <Link to='/campuses' className='hover:text-gray-400 px-2'>
                Campuses
            </Link>
            <Link to='/students' className='hover:text-gray-400'>
                Students
            </Link>
        </div>
    </header>
  )
}

export default Navbar
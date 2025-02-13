import React from 'react'
import Gitub from '../assets/github.png'
import Linkedn from '../assets/linkedn.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-auto bg-gray-300 h-40 w-full'>
        <div className='section-container flex justify-around'>

            <div className='flex flex-col'>
                <div className='font-semibold'>Connect on social media</div>
                {/* links */}
                <div className='flex justify-center gap-3 pt-4'>

                    <img src={Gitub} alt="Github logo" className='w-11' />
                    <img src={Linkedn} alt="Linkedn logo" className='w-11' />
                </div>
            </div>
            <div>
                <div className='font-semibold'>Useful Links</div>
                <ul className='flex flex-col items-center space-y-2 pt-2 '>
                    <Link to='/'>
                        <li className='hover:text-white'>Welcome</li>
                    </Link>
                    <Link to='/campuses'>
                        <li className='hover:text-white'>Campuses</li>
                    </Link>
                    <Link to='/students'>
                        <li className='hover:text-white'>Students</li>
                    </Link>
                </ul>
            </div>

        </div>

    </footer>
  )
}

export default Footer
import React from 'react'
import Gitub from '../assets/github.png'
import Linkedn from '../assets/linkedn.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-auto bg-gray-300 h-40 w-full'>
        <div className='section-container flex justify-around'>
            
            <div className='flex w-[75%]'>
                <div className='font-semibold flex items-center'>Useful Links:</div>
                <ul className='flex items-center'>
                    <Link to='/' >
                        <li className='hover:text-white w-20 flex justify-center'>Welcome</li>
                    </Link>
                    <Link to='/campuses'>
                        <li className='hover:text-white w-20 flex justify-center'>Campuses</li>
                    </Link>
                    <Link to='/students'>
                        <li className='hover:text-white w-20 flex justify-center'>Students</li>
                    </Link>
                </ul>
            </div>

            <div className='flex flex-col'>
                <div className='font-semibold'>Connect on social media</div>
                {/* links */}
                <div className='flex justify-center gap-3 pt-4'>

                    <img src={Gitub} alt="Github logo" className='w-11' />
                    <img src={Linkedn} alt="Linkedn logo" className='w-11' />
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
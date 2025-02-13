import React from 'react'
import Banner from '../assets/Banner.png'

const Homepage = () => {
  return (
    <section className='flex section-container mt-[5%]'>
        {/* left side */}
        <div className='flex flex-col mt-[5%]'>
            <div className='font-bold text-3xl'>"Education Is The Most Powerful Weapon Which You Can Use To Change The World"</div>
            <span className='flex justify-end mt-3 px-1.5 text-xl'>-Nelson Mandela</span>
        </div>

        {/* right side */}
        <div>
            <img src={Banner} alt="collage of education related materials" className='w-300' />
        </div>
    </section>
  )
}

export default Homepage
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Campuses from './components/Campuses'

function App() {
  return(
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex grow-1'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/campuses' element={<Campuses/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )

}

export default App

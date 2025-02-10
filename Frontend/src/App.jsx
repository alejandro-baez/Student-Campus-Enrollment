import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Campuses from './components/Campuses'

function App() {
  return(
    <div id='body'>
      <Navbar/>
      <main>
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

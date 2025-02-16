import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Campuses from './components/Campuses'
import SingleCampus from './components/SingleCampus'
import Students from './components/Students'
import SingleStudent from './components/SingleStudent'

function App() {
  return(
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex grow-1'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/campuses' element={<Campuses/>}/>
          <Route path='/campuses/:id' element={<SingleCampus/>} />
          <Route path='/students' element={<Students/>} />
          <Route path='/students/:id' element={<SingleStudent/>}/>
        </Routes> 
      </main>
      <Footer/>
    </div>
  )

}

export default App

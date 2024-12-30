import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Courses from './pages/Courses'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/courses' element={<Courses/>}/>
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import {Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path='/' element={<>
        <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
        </>}/>
        {/* <Route path='/contact' element={ <Contact />} /> */}
      </Routes>
      
     
    </div>
  )
}

export default App

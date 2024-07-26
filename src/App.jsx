import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'

import BG_GRADIENT from "./assets/wave-41462.png";

const App = () => {
  return (
    <div className='bg-background'>
      <div
      style={{

      }}
      >
      <Navbar />
      <Hero />
      </div>
      <Skills />
      <WorkExperience/>
      <AboutMe />
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
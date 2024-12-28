import React from 'react'
import Navigation from './components/navigation'
import Hero from './components/hero'

import Projects from './components/projects'
import Technologies from './components/technologies'
import Studies from './components/studies'
import Contact from './components/contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <img className='hands' src="../public/footerhands.webp" alt="hands" />
        
        <Projects />
        <Technologies />
        <Studies />
        <img className='hands' src="../public/footerhands.webp" alt="hands2" />
        <Contact />
      </main>
    </div>
  )
}

export default App


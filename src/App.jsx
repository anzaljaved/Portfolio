import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements'

function App() {
  return (
    <div id="div" className="w-full min-h-screen m-0 p-0  text-green-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



import { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '../src/components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CustomCursor from './components/CustomCursor'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    //Register scrolltrigger plugins
    gsap.registerPlugin(ScrollTrigger)

    //Refresh ScrollTrigger when the page is fully loaded
    ScrollTrigger.refresh()

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <CustomCursor />
      <ProjectSection />
      <ContactSection />
      <Footer />
   </div>
  ) 
}

export default App

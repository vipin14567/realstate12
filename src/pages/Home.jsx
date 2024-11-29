import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Projects />
        <Testimonials/>
        <Footer />
    </div>
  )
}

export default Home
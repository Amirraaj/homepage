import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/MyServices'
import Work from '../components/Work'

function Home() {
  return (
   <div className='overflow-hidden'>
   <Hero/>
   <About />
   <Services />
   <Work />
   <Footer />
   </div>
  )
}

export default Home
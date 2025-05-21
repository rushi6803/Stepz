import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Template from './Components/Template/template'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FAQ from './Components/FAQ/FAQ'
import Study from './Components/Study/Study'
import Gallery from './Components/gallery/gallery'

const router=createBrowserRouter(
[
  {
    path:"/",
    element:
    <div className='container'>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Gallery/>
    <Template/>      
    <Testimonial/>
    <Footer/>
    
    </div>

  },

  {
    path:"/contact",
    element:
    <div className='container'>
    <Navbar/>
    <Contact/>
    <Footer/>
    
    </div>

  },
  {
    path:"/faq",
    element:
    <div className='container'>
    <Navbar/>
    <FAQ/>
    <Footer/>
    
    </div>

  },
  ,
  {
    path:"/grant",
    element:
    <div className='container'>
    <Navbar/>
    <Gallery/>
    <Footer/>
    
    </div>

  },
  
  {
    path:"/about",
    element:
    <div className='container'>
    <Navbar/>
    <About/>
    <Services/>
    <Footer/>
    
    </div>

  },
  {
    path:"/title",
    element:
    <div className='container'>
    <Navbar/>
    <Services/>
    <Footer/>
    </div>

  },
  {
    path:"/study",
    element:
    <div className='container'>
    <Navbar/>
    <Study/>
    <Footer/>
    
    </div>

  }


])


const App = () => {

  
 
  return (
    <div>
      <RouterProvider router={router}/>
      
      
    </div>
  )
}

export default App

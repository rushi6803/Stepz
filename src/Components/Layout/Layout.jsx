import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Hero from '../Hero/Hero'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout

import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='left'>
        <h1>STEPZ AHEAD PVT LTD</h1>
        <p>Stepz Ahead Pvt Ltd is a business based in Adelaide, South Australia, with Australian corporate registration, that helps students from different countries and backgrounds to gain access to universities and colleges in Australia and abroad.</p>
      </div>
      <div className='mid'><h3>CONTACT DETAILS</h3>
      <p><b>Office Address:</b><a href='https://maps.app.goo.gl/myZihcAMpRSowD1dA'>50 Grenfell Street ,Adelaide,5000</a></p>
      <p><b>Contact No:</b><a href='https://wa.me/+610411720025'>+61 0411720025</a></p>
      <p><b>E-mail:</b>info@stepz.com</p>
      </div>
       
      <div className='right'> 
        <h3>EXPLORE US</h3>
        
         <NavLink to="/about"><p>About us </p></NavLink>
         <NavLink to="/title"> <p>Services </p></NavLink>
         <NavLink to="/Faq"> <p>FAQ's </p></NavLink>
        <NavLink  to="/contact"> <p>Contact us </p></NavLink>
        

      </div>
      </div>
      <div className='bottom'>
    <p><b>© 2025 STEPZ AHEAD PVT LTD. All rights Reserved</b></p>
    
   
    </div>
  </>
   
  )
}

export default Footer

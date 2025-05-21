import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Stepz.JPG'
import call from '../../assets/call1.png'
import mail from '../../assets/email.png'
import location from '../../assets/location.png'
import { Link } from 'react-scroll'
import Contact from '../Contact/Contact'
import Faq from '../../Components/FAQ/FAQ'
import Study from '../../Components/Study/Study'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/menu.png'
const Navbar = () => {

  const[mobileMenu,setMobileMenu]=useState(false);

  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false):setMobileMenu(true);
  }
  

  return (
    <>
    <div className='top'>
  <ul><li className='right'> <NavLink to="/contact">  <img src={location} alt="" className='add' />50 Grenfell Street ,Adelaide,5000</NavLink> </li>
  <li>  <img src={call} alt="" className='call'/><a href='https://wa.me/+610411720025'>+61-0411720025</a></li>
   </ul>
    </div>

    <nav  className="navbar">
     
     <NavLink to="/">   <img src={logo} alt=" " className='logo'/></NavLink>
        <ul className={mobileMenu ?' ':'hide-mobile'}>
          <NavLink to="/"><li>HOME</li></NavLink>
          <NavLink to="/about" ><li>ABOUT US</li></NavLink>
          <NavLink to="/study">  <li>STUDY ABROAD</li></NavLink>
          <NavLink to="/title">  <li>SERVICES</li></NavLink>
          <NavLink to="/grant">  <li>VISA GRANT</li></NavLink>
          <NavLink to="/Faq"> <li>FAQ'S</li></NavLink> 
          <NavLink to="/contact"> <li> CONTACT  US</li></NavLink>
          <NavLink to="/contact">  <button className='btn'>GET CONSULTATIONS</button></NavLink>
        </ul>
          
           <img src={menu} alt="" className='menu' onClick={toggleMenu} />
    </nav>
    
   
    </>
  )
}

export default Navbar

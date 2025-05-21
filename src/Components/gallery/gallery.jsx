import React from 'react'
import './gallery.css'
import img1 from '../../assets/rg1.jpeg'
import img2 from '../../assets/rg2.jpeg'
import img3 from '../../assets/rg3.jpeg'
import img4 from '../../assets/rg4.jpeg'
import img5 from '../../assets/rg5.jpeg'
import img6 from '../../assets/rg6.jpeg'


const gallery = () => {
  return (
    <div className='gallery'>
        <h1>Recent Visa Grant</h1>
        <div className='images'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </div>
     
    </div>
  )
}

export default gallery

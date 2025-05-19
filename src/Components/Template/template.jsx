import React from 'react'
import temp1 from '../../assets/Newsletter.png'
import './template.css'
import usa from '../../assets/usa.png'
import uk from '../../assets/united-kingdom.png'
import singapore from '../../assets/singapore.png'
import australia from '../../assets/australia.png'
import nz from '../../assets/new-zealand.png'
import germany from '../../assets/germany.png'
import canada from '../../assets/canada.png'

const template = () => {
  return (
    <>
    <div className='temp'>
        <div className='temp-left'>
      <img src={temp1} alt="" className='pic'/>
      </div>
      <div className='temp-right'>
      <h3>Overseas Education</h3>
      <h2>Looking for Quality Abroad Education?</h2>
     
      <p>Discover top-tier education overseas with us. Our dedicated support and expertise pave the way for a seamless and enriching academic journey. Unleash your potential with quality international education.</p>
      <h4 >350+ Universities in 17 Countries:</h4>
      <div className='img1'>
          <img src={australia} alt="" />
            <img src={canada} alt="" />
            <img src={usa} alt="" />
        
   
            <img src={nz} alt="" />
            <img src={germany} alt="" />
            <img src={uk} alt="" />
                
    

    <img src={singapore} alt="" />
    </div>
    
      </div>
      
    </div>
    
    </>
  )
}

export default template

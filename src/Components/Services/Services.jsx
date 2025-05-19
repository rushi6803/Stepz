import React from 'react'
import './Services.css'
import career from '../../assets/career.png'
import evaluation from '../../assets/evaluation.png'
import course from '../../assets/course.png'
import institute from '../../assets/college.png'
import medical from '../../assets/medical.png'
import application from '../../assets/application.png'
import pre from '../../assets/pre.png'
import invest from '../../assets/investment.png'
import insurance from '../../assets/insurance.png'


const Services = () => {
  return (
    <>   
    <h2 className='title'>OUR SERVICES</h2>
    <div className='Services'>
         <div className="program">
        <img src={career} alt="" />
           <h3 className='tag'>  Career and Study Advice</h3>
           <p>We encourage students to align goals, academic background, and work experience. Our guidance ensures courses that suit your background and interests</p>
         </div>
         <div className="program">
         <img src={evaluation} alt="" />
           <h3 className='tag'>  Prior Evaluation</h3>
           <p>Ensure institutional standards by pre-assessing student eligibility based on degrees, certifications, and English proficiency, confirming document authenticity at this stage.</p>
         </div>

         <div className="program">
         <img src={course} alt="" />
           <h3 className='tag'> Course Selection</h3>
           <p>We assist students in selecting the best professional route of their career by advising them the appropriate course in line with their previous studies or work experience.</p>
         </div>
         
       </div>
       <div className='Services'>
         <div className="program">
         <img src={institute} alt="" />
           <h3 className='tag'> Choosing an Educational Institution</h3>
           <p>After course selection, we help choose the right nation and provider. We guide students in selecting the finest university, processing all college applications to meet their academic needs.</p>
         </div>
         <div className="program">
         <img src={invest} alt="" />
           <h3 className='tag'> Financial Support</h3>
           <p>We directly assist students with getting scholarships and bank loans.</p>
         </div>

         <div className="program">
         <img src={insurance} alt="" />
           <h3 className='tag'> Overseas Student Health Cover (OSHC)</h3>
           <p>The Immigration department stipulates that students must maintain OSHC for the duration of their visa in order to be granted a student visa. We support students in acquiring this kind of health insurance.</p>
         </div>
         
       </div>

       <div className='Services'>
         <div className="program">
         <img src={medical} alt="" />
           <h3 className='tag'> Medical Appointments</h3>
           <p>There are certain guidelines for setting up a health assessment when students apply for a visa. We schedule an appointment for Panel Clinics' health assessment.</p>
         </div>
         <div className="program">
         <img src={application} alt="" />
           <h3 className='tag'>  Application Preparation           </h3>
        <p>Following the issuance of the CoE, we prepare the student visa application in accordance with the most recent visa requirements and submit it to the immigration office. We assist and counsel the students as they choose the proper visa category.</p>
         </div>

         <div className="program">
         <img src={pre} alt="" />
           <h3 className='tag'> Pre Departure and Post Landing</h3>
           <p>Ensure a smooth pre-departure with our assistance covering visa details, currency exchange, travel arrangements, customs, clothing advice, and cultural insights. We ease your landing with airport pickup, course guidance, and visa support.</p>
         </div>
         
       </div>
    </>

  )
}

export default Services

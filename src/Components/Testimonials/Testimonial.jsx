import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next.png'
import back from '../../assets/prev.png'
 

const Testimonials = () => {

  const slider = useRef();
  let tx=0;


  const slideForword=()=>{
    if(tx > -10){
      tx-=55;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx < 0){
      tx+=55;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <h1>STUDENT  TESTIMONIALS</h1>
      <img src={next} className='next-btn' onClick={slideForword}/>
      <img src={back} className='back-btn'onClick={slideBackward}/> 
    <div className='slider'>
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <div>
                <h3>Aarav Sharma</h3>
                <span>Focus on Ethical Practices</span>
              </div>
            </div>
            <p> Stepz Ahead was very transparent throughout my application process. I felt confident that they were handling everything ethically, which was a big relief. They didn't make any false promises, and I appreciated their honesty.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
            
              <div className='name'>
                <h3>Priya Patel</h3>
               <span>Positive Staff Approach</span>
              </div>
            </div>
            <p> The staff at Stepz Ahead were incredibly supportive. They had a very positive attitude, which helped me stay motivated and confident. They guided me step-by-step and were always available to answer my questions.</p>
          </div>
        </li><li>
          <div className="slide">
            <div className="user-info">
            
              <div className='name'>
                <h3>Rahul Banerjee</h3>
                <span>Quality of Service</span>
              </div>
            </div>
            <p> I received high-quality service from Stepz Ahead. My consultant was very knowledgeable and experienced. They helped me put together a strong application, and I believe their expertise significantly increased my chances of success.</p>
          </div>
        </li><li>
          <div className="slide">
            <div className="user-info">
              
              <div className='name'>
                <h3>Anika Menon</h3>
                <span>Guidance with IELTS</span>
              </div>
            </div>
            <p> Stepz Ahead provided excellent guidance for my IELTS exam. The instructors were very helpful, and I felt well-prepared for the test. Their support was crucial in helping me achieve the score I needed for my university application.</p>
          </div>
        </li>
        <li>
        <div className="slide">
            <div className="user-info">
              
              <div className='name'>
        
                <h3>Rohan Singh</h3>
                <span>Overall Experience</span>
              </div>
            </div>
            <p> My overall experience with Stepz Ahead was very positive. They provided comprehensive support, from helping me choose the right program to assisting with my visa application. I would highly recommend them to any student looking to study abroad.</p>
          </div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Testimonials

import React,{ useState } from 'react'
import './Contact.css'

const Contact = () =>{

  const [result, setResult] = React.useState("");
 
     const onSubmit = async (event) => {
       event.preventDefault();
       setResult("Sending....");
       const formData = new FormData(event.target);
   
       formData.append("access_key", "3b2b1981-70ec-4307-96d5-e79ce2e97525");
   
       const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData
       });
   
       const data = await response.json();
   
       if (data.success) {
         setResult("Detail Submitted Successfully....we will contact you soon with your requirement");
         event.target.reset();
       } else {
         console.log("Error", data);
         setResult(data.message);
       }
     };
  return (
    <>
        <div className='Contact'>
            <div className='location'> 
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3001156664395!2d138.599128675959!3d-34.9240094728411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced6f33da6af%3A0xa1af4edb54172b63!2s50%20Grenfell%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e0!3m2!1sen!2sin!4v1747763109691!5m2!1sen!2sin" width="100%" height="700" style={{border:"0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contact-us'>
              <h1>GET CONSULTATION</h1>
                <form className='custom-form' onSubmit={onSubmit}>
                  
                <label>Full Name:</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
  

  <label>Email:</label>
  <input type="email" name="email" placeholder='Enter Your  Email'/>
  <label>Status:</label>
  <select name="status"    >
    <option value="">-- Select --</option>
    <option value="student">Student</option>
    <option value="visitor">Visitor</option>
    <option value="pr">PR</option>
    <option value="other">Other</option>
  </select>
  <label>Write your message here</label>
                <textarea name="message" placeholder='Enter your message' row="10" required></textarea>
  <button type="submit">Submit</button>
</form>
<span>{result}</span>
            </div>
        </div>
            
       
    </>
      
  )
}

export default Contact

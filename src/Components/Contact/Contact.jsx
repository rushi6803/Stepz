import React,{ useState } from 'react'
import './Contact.css'

const Contact = () =>{

  const [result, setResult] = React.useState("");
 
     const onSubmit = async (event) => {
       event.preventDefault();
       setResult("Sending....");
       const formData = new FormData(event.target);
   
       formData.append("access_key", "2a37ec1c-08ad-4d28-8c33-d21f0b305832");
   
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.899306485855!2d138.68041939548863!3d-34.87009913723679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b5785c88621b%3A0x63d9a7dba3231418!2s25%20Wood%20Rd!5e0!3m2!1sen!2sin!4v1747383628774!5m2!1sen!2sin" width="100%" height="700" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
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

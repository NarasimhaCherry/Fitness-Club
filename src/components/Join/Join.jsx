import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5x0zci7', 'template_aqdx1v8', form.current, 
          'b9fkqGiPVyQsiBsha'
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <div className='Join' id="join-us">
        {/* Left */}
        <div className='left-join'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>
        {/* Right */}
        <div className='right-join'>
           <form ref={form} className='email-container' onSubmit={sendEmail}>
               <input type="email" name="user_email" placeholder="Enter your Email id" />
               <button className='btn btn-join'>Join Now</button>
           </form>
        </div>
    </div>
  )
}

export default Join
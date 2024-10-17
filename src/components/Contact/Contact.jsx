import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'
import linkedin from '../../assets/linkedin.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            Get in touch
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I am actively seeking new opportunities to apply my skills. I'm available to take on projects, and I'm open to any job opportunities that align with my expertise. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img className='contact-svg' src={mail} alt="" />   
                        <p>aartijangra482@gmail.com</p>                     
                    </div>
                    <div className="contact-detail">
                        <img className='contact-svg' src={location} alt="" />
                        <p>Jalandhar, Punjab</p>
                    </div>
                    <div className="contact-detail">
                        <img className='contact-svg' src={linkedin} alt="" />
                        <a href="https://www.linkedin.com/in/aarti-jangra-044427220/"><p>aarti_jangra</p></a>
                        
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' />
                <label htmlFor="">Write message here</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                <button type='submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact

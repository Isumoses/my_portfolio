import React, {useRef} from 'react'
import "./contact.css"
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDescription'>Please fill out the form below to discuss any work oppotunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='messsage' rows="5" placeholder='Your Message'></textarea>
                <button type="submit" className='submitbtn' value="Send" >submit</button>
                <div className='links'>
                    <img src={facebook} alt='fb' className='linkIcon'/>
                    <img src={whatsapp} alt='wtsap' className='linkIcon'/>
                    <img src={linkedin} alt='ln' className='linkIcon'/>
                    <img src={github} alt='gh' className='linkIcon'/>
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact

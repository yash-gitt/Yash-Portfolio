import React from 'react';
import Tittle from '../components/Tittle';
import emailjs from 'emailjs-com';


function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
    "service_nuykh19",
    "template_t0cxvoh",
    e.target,
    "user_tXGhcUTKGYOIjzAXdfoeV"
    ).then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
    e.target.reset();

  }
  return (
    <div className="container border">
      <Tittle title={'Contact'} span={'Contact'} />
      <div style={{ marginTop: "12rem", marginRight: "7rem"}}>
        <form onSubmit={sendEmail}>
           <h3>GET IN TOUCH</h3>
           <label>Name</label>
           <input type="text" id="name" name="name" placeholder="Name" required/>
           <label>Email</label>
           <input type="email" id="email" name="user_email" placeholder="Email id" required/> 
           <label>Message</label>
           <textarea id="message" rows="4" name="message"  placeholder="Message"></textarea>
           <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}


export default Contact;
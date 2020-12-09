import React from 'react';
import emailjs from 'emailjs-com';

import './ContactForm.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'react', e.target, 'user_ZSuFWj7fxaDkdaUBsG2zm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
   
    <form className="contact-form" onSubmit={sendEmail}>
     
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send Message" />
    </form>
   
  );
}
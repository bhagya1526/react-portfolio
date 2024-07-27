import React from 'react'
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_0gflk6q', 'template_x0zz0lc', form.current, {
        publicKey: 'JRXzu-kQfakQPkbKZ',
      })
      .then(
        () => {
          toast.success("Message sent Successfully")
        },
        (error) => {
          toast.error("Message failed to send")
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bhagyapasagada@gmail.com</h5>
            <a href="mailto:bhagyapasagada@gmail.com" target='_blank' rel="noopener noreferrer">Send a mail</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>bhagyapasagada@gmail.com</h5>
            <a href="https://m.me/bhagya.rani.9480" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>My personal number</h5>
            <a href="https://api.whatsapp.com/send?phone=7842339470" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/*options for contact end */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="" placeholder='Your Email' required/>
          <textarea name="message" rows='7' placeholder="Your message" id="" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
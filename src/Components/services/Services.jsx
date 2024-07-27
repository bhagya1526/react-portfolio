import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi'
import DEV from './../../assets/developement.png';
import UI from './../../assets/ui-ux.jpeg';
import DANCE from './../../assets/dance.webp';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <img src={DEV} alt="" srcset="" className='service__image' />
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Visual Design: This includes the overall aesthetic of the product, including color schemes, typography, and layout.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Interactive Elements: Designing buttons, sliders, icons, and other elements that users interact with.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Consistency: Ensuring a consistent design language across all screens and components.</p>
            </li>
          </ul>
        </article>
        {/*end of UI/UX */}
        <article className="service">
        <img src={UI} alt="" srcset="" className='service__image1' />
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Frontend Development: Involves creating the visual and interactive aspects of a website using HTML, CSS, and JavaScript, ensuring usability, performance, and responsiveness.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Backend Development: Manages the server-side logic, databases, and application functionality and focusing on scalability, security, and efficiency.</p>
            </li>
          </ul>
        </article>
        {/*end of web devopment */}
        <article className="service">
          <img src={DANCE} alt="" srcset="" className='service__image2' />
          <div className="service__head">
            <h3>Dance</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__list-icon'/>
              <p> Originating from Andhra Pradesh, India, Kuchipudi combines classical dance with drama and storytelling. It often narrates stories from Hindu epics like Ramayana.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>I have an experience of about eleven years in dance and have won awards like Indian Book Of records. Familiar with many other tribal and folk dance forms.</p>
            </li>
          </ul>
        </article>
        {/*end of dance*/}
      </div>
    </section>
  )
}

export default Services
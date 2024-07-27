import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" srcset="" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card card1'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>less than an year of working</small>
              </article>
              
              <article className='about__card card1'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ projects</small>
              </article>
            </div>

            <p>
            I am currently a 4th-year engineering student at Vignan's Institute of Information Technology. As a proficient full-stack web developer, I have a strong grasp of front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies including Node.js, Express, JavaScript, API, MySQL, Sequelize, and MongoDB. Additionally, I am skilled in coding with various programming languages such as C++, C, and Python.
            </p>

            <a href="#contact"className='btn btn-primary'>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About
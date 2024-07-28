import React, { useState } from 'react'
import './header.css';
import CTA from './CTA';
import ROCKET from '../../assets/rocket.png';
import ME from '../../assets/me.jpeg';
import HeaderSocials from './HeaderSocials';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Header = () => {

  const [typeeffect] = useTypewriter({
    words:['Full Stack Developer.','Competitive Programmer.','Classical Dancer.'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:50,
    delay:1000,
  })

  return (
    <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Pasagada Bhagya Rani</h1>
      <h3 className="text-light">
      <span>{typeeffect}</span>
      <span style={{color:'orange'}}><Cursor/></span>
      </h3>
      <CTA />
      <HeaderSocials />
      {/* <div className="scene">
        <div className="rocket">
          <img src={ROCKET} alt="" />
        </div>
      </div> */}
      <div className="me">
        <img src={ME} alt="Pasagada Bhagya Rani Me" />
      </div>

     <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header
import React from 'react'
import './header.css';
import CTA from './CTA';
import ROCKET from '../../assets/rocket.png';
import ME from '../../assets/me.jpeg';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Pasagada Bhagya Rani</h1>
      <h5 className="text-light">Full Stack Developer</h5>
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
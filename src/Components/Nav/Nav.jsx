import React, { useState } from 'react'
import './nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from 'react-icons/bi'
const Nav = () => {
 
  const [nav,setNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick= {()=> setNav('#')} className={nav === 'a' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick= {()=> setNav('#about')} className={nav === 'a' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick= {()=> setNav('#experience')} className={nav === 'a' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick= {()=> setNav('#services')} className={nav === 'a' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick= {()=> setNav('#contact')} className={nav === 'a' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
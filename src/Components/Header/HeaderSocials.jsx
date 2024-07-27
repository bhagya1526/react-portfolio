import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/pasagada-bhagya-rani-002446255/" target='_blank' rel="noopener noreferrer"><IoLogoLinkedin /></a>
        <a href="https://github.com/bhagya1526" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://leetcode.com/u/bhagya1527/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="https://geeksforgeeks.org/user/bhagyarani/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
        <a href="https://www.codechef.com/users/bhagya_1526" target="_blank" rel="noopener noreferrer"><SiCodechef />
</a>
    </div>
  )
}

export default HeaderSocials
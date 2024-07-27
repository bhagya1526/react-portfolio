import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA= () => {
  return (
    <div className='cta'>
        <a href={CV} download className='butn'>Download CV</a>
        <a href="#contact" className='butn'>Let's Connect</a>
    </div>
  )
}

export default CTA;
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio1.jpg';
import IMG6 from '../../assets/portfolio1.jpg';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Leetcode',
    link:"https://leetcode.com/u/bhagya1527/"
  },
  {
    id:2,
    image: IMG2,
    title: 'Codechef',
    link:"https://www.codechef.com/users/bhagya_1526"
  },
  {
    id:3,
    image: IMG3,
    title: 'Geek For Geeks',
    link:"https://www.geeksforgeeks.org/user/bhagyarani/"
  },
  {
    id:4,
    image: IMG4,
    title: 'Hackerrank',
    link:"https://www.hackerrank.com/profile/bhagyapasagada"
  },
  {
    id:5,
    image: IMG5,
    title: 'LinkedIn',
    link:"https://www.linkedin.com/in/pasagada-bhagya-rani-002446255/"
  },
  {
    id:6,
    image: IMG6,
    title: 'GitHub',
    link:"https://github.com/bhagya1526"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Profile</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,link}) => {
          return(
            <article key ={id} className="portfolio__item">
            <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="portfolio__item-image">
          <img src={image} alt={title} srcset="" />
          </div>
              <h3>{title}</h3>
            </a>
          
        </article>
          )
        })
      }
      </div>

    </section>
  )
}

export default Portfolio
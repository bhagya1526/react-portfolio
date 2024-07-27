import React from 'react'
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar1.jpg';
import AVTR3 from '../../assets/avatar1.jpg';
import AVTR4 from '../../assets/avatar1.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name:'HOPE',
    review: 'uywxcyuviyfvyeyvchveyivwecevrcyiwdlcvhw',
  },
  {
    avatar: AVTR2,
    name:'HOPE',
    review: 'uywxcyuviyfvyeyvchveyivwecevrcyiwdlcvhw',
  },
  {
    avatar: AVTR3,
    name:'HOPE',
    review: 'uywxcyuviyfvyeyvchveyivwecevrcyiwdlcvhw',
  },
  {
    avatar: AVTR4,
    name:'HOPE',
    review: 'uywxcyuviyfvyeyvchveyivwecevrcyiwdlcvhw',
  },
  {
    avatar: AVTR4,
    name:'HOPE',
    review: 'uywxcyuviyfvyeyvchveyivwecevrcyiwdlcvhw',
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="container testimonials__container">
      {
        data.map(({avatar,name,review},index)=>{
          return (
            <SwiperSlide key ={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar one" />
          </div>
          
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
        )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonial
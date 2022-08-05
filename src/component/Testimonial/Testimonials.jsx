import React from 'react'
import TestimonialsData from './TestimonialsData'
import './style.css';

const Testimonials = () => {
  return (
    <section className="testimonials adjust" id="testimonials">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="content">
        {
          TestimonialsData.map((curt) => {
            return (
              <div className="testimonialsBox" key={curt.id}>
                <div className="imgBx">
                  <img src={curt.src} alt={curt.alt} />
                </div>
                <p>{curt.about}</p>
                <h4>{curt.info} <br /> <span>{curt.title}</span></h4>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Testimonials;

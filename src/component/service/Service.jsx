import React from 'react'
import ServiceData from './ServiceData'
import './style.css';

const Service = () => {
  return (
    <section className="service adjust" id="service">
      <div className="title">
        <h2>My Skills</h2>
      </div>
      <div className="content">

        {
          ServiceData.map((ele) => {
            return (
              <div className="serviceBox" key={ele.id}>
                <img src={ele.src} alt="icon" />
                <h2>{ele.title}</h2>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Service;

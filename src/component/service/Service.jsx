import React from 'react'
import ServiceData from './ServiceData'
import Accordion from '../common/accordion/index'
import './style.css';
import Card from '../common/card';

const Service = () => {
  return (
    <section className="service adjust" id="service">
      <div className="title">
        <h2>My Skills</h2>
      </div>
      <Card />
      <Accordion />

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

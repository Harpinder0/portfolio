import React from 'react'
import ProjectData from './ProjectData';
import './style.css';

const Project = () => {
  return (
    <section className="project adjust" id="project">
      <div className="title">
        <h2>Recent Work</h2>
      </div>

      <div className="content">
        {
          ProjectData.map((curVal) => {
            return (
              <div className="workBx" key={curVal.id}>
                <div className="imgBx">
                  <img src={curVal.src} alt={curVal.alt} />
                </div>
                <div className="textBx">
                  <h3>{curVal.name}</h3>
                  <button
                    type="button"
                    className="btn btn-light"
                  >
                    <a
                      className='nav-link'
                      target="_blank"
                      rel="noreferrer"
                      href={curVal.link}
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
      {/*<div className='button-footer-section'>
          <button type="button" className="btn btn-light button-style-back">Back</button>
          {
            ProjectData.length > 6 ? <button type="button" className="btn btn-light button-style-next">Next</button> : ''
          }
        </div>*/}
    </section>
  )
}

export default Project;

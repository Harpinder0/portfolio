import React from 'react';
import './style.css';

const ContainerBox = ({title, content}) => {
  return (
    <section className="about adjust" id="about">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="content">
        {content}
      </div>
    </section>
  )
}

export default ContainerBox;

import React from 'react';
import './style.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>Copy © {year} Harpinder Singh. All Right Reserved.</p>
    </div>
  )
}

export default Footer;

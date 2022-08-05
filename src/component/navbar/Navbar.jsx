import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import Testimonials from './Testimonials';
import Routes from '../../routes';
import './style.css';

const toggle = () => {
  const toggles = document.querySelector('.toggle');
  const topbar = document.querySelector('.topbar');
  const navigation = document.querySelector('.navigation');
  const main = document.querySelector('.main');
  toggles.classList.toggle('active')
  topbar.classList.toggle('active')
  navigation.classList.toggle('active')
  main.classList.toggle('active')
}

const dark = () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark')
}

const removeToggle = () => {
  const navigation = document.querySelector('.navigation');
  const main = document.querySelector('.main');
  navigation.classList.remove('active')
  main.classList.remove('active')
}

const Navbar = () => {

  return (
    <div className="container-fuild navbar">
      <div className="navigation">
        <ul>
          <li><Link to="/portfolio" onClick={removeToggle}>Home</Link></li>
          <li><Link to="/about" onClick={removeToggle}>About</Link></li>
          <li><Link to="/service" onClick={removeToggle}>Service</Link></li>
          <li><Link to="/project" onClick={removeToggle}>Project</Link></li>
          {/* <li><Link to="#testimonials" onClick={removeToggle}>Testimonials</Link></li> */}
          <li><Link to="/contact" onClick={removeToggle}>Contact</Link></li>
        </ul>
        <div className="themeSwitch" onClick={dark}></div>
      </div>

      <div className="main">
        <div className="topbar">
          <Link to="/portfolio" className="logo">Portfolio</Link>
          <div className="toggle" onClick={toggle}>
            <AiOutlineMenu />
          </div>
        </div>
        <Routes />

        {/* <Testimonials /> */}
        {/* <Footer />*/}
      </div>
    </div>
  )
}

export default Navbar;

import React from 'react';
// import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import user1 from '../../images/usermy.jpg'
import Cv from '../../images/HarpinderSingh.pdf'
import './style.css';


const Home = () => {
  return (
    <section className="banner" id="banner">
      <div className="content">
        <div className="imgBx">
          <img src={user1} alt="user" />
        </div>
        <h3>Harpinder Singh</h3>
        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        {/* <NavLink to="/cvdownload" activeClassName="selected" className="btn">Download My CV</NavLink> */}
        <a href={Cv} className="btn">Download My CV</a>

        <ul className="socialMedia">
          <li><a href="https://www.facebook.com/harpinder.bhullar.562"><FaFacebookF /></a></li>
          <li><a href="https://www.instagram.com/harpinder0/"><FiInstagram /></a></li>
          <li><a href="https://www.linkedin.com/in/harpinder-singh-45995a208/"><GrLinkedinOption /></a></li>
          <li><a href="//portfolio"><AiOutlineTwitter /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Home;

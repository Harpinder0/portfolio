import React from 'react';
// import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import user1 from '../images/usermy.jpg'
import Cv from '../images/HarpinderSingh.pdf'



const Home = () => {
    return (
        <>
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

            <style jsx="true">{`
                section {
                    position: relative;
                    min-height: 100vh;
                }

                .banner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 20px;
                }

                .banner .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .banner .imgBx {
                    position: relative;
                    height: 260px;
                    width: 260px;
                    overflow: hidden;
                    border-radius: 50%;
                    margin-bottom: 20px;
                }

                .banner .imgBx img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .banner .content #cvBtn {

                }
                h3 {
                    position: relative;
                    color: var(--black);
                    text-transform: uppercase;
                    font-size: 1.2rem;
                    letter-spacing: 2px;
                }

                p {
                    color: #777;
                    text-align: center;
                }

                .dark p {
                    color: var(--black);
                }

                .btn {
                    position: relative;
                    display: inline-block;
                    background: var(--black2);
                    color: #fff;
                    padding: 10px 30px;
                    font-weight: 400;
                    text-decoration: none;
                    letter-spacing: 1px;
                    margin-top: 10px;
                }
                
                .btn:hover {
                    background: rgba(0,0,0,0.09);
                }

                .dark .btn:hover {
                    background: #2196f3;
                    color: #fff;
                }

                .socialMedia {
                    position: absolute;
                    bottom: 20px;
                    margin: 0;
                    padding: 0;
                    display: flex;
                }

                .socialMedia li {
                    list-style: none;
                }

                .socialMedia li a {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    background: rgba(0,0,0,0.05);
                    margin: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: var(--black);
                    font-size: 1.2rem;
                }

                .socialMedia li a:hover {
                    background: var(--black2);
                    color: #fff;
                }

                .dark .socialMedia li a:hover {
                    background: #2196f3;
                }

            `}</style>
        </>
    )
}

export default Home;

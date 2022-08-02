import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import Testimonials from './Testimonials';
import Routes from '../routes';

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
        <>
            <div className="container-fuild navbar">
                <div className="navigation">
                    <ul>
                        <li><Link to="/" onClick={removeToggle}>Home</Link></li>
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
                        <Link to="/" className="logo">Portfolio</Link>
                        <div className="toggle" onClick={toggle}>
                            <AiOutlineMenu/>
                        </div>
                    </div>
                    <Routes />
                    {/* <Testimonials /> */}
                    {/* <Footer />*/}
                </div>
                
                   
            </div>

            <style jsx="true">{`
                .navbar {
                    position: relative;
                    width: 100%;
                }

                .navigation {
                    position: fixed;
                    top: 0;
                    height: 100%;
                    width: 300px;
                    border-right: 1px solid rgba(0,0,0,0.05);
                    background: var(--white2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    transition: width 0.5s, left 0.5s;
                }

                .dark .navigation {
                    border-right: 1px solid rgba(0,0,0,0.5);
                }

                .navigation.active {
                    width: 0;
                }

                .navigation ul {
                    position: relative;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 20px 40px;
                }

                .navigation ul li {
                    position: relative;
                    width: 100%;
                    list-style: none;
                }

                .navigation ul li a {
                    position: relative;
                    display: block;
                    width: 100%;
                    margin: 10px 0;
                    white-space: normal;
                    text-transform: uppercase;
                    display: flex;
                    color: var(--black);
                    text-decoration: none;
                    font-weight: 500;
                    letter-spacing: 2px;
                    opacity: 0.5;
                }

                .navigation ul li a:hover {
                    opacity: 1;
                }

                .content h3,
                .content p {
                    text-align: center;
                    line-height: 33px;
                letter-spacing: 1px;
                }

                .main {
                    position: absolute;
                    background: var(--white);
                    width: calc(100% - 300px);
                    left: 300px;
                    top: 0;
                    min-height: 100vh;
                    transition: width 0.5s, left 0.5s;
                }
                .main.active {
                    width: calc(100% - 0px);
                    left: 0;
                }

                .main .topbar {
                    position: fixed;
                    top: 0;
                    width: calc(100vw - 300px);
                    left: 300px;
                    background: var(--white2);
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    height: 60px;
                    padding: 0 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 10000;
                    transition: width 0.5s, left 0.5s;
                }

                .dark .main .topbar {
                    border-bottom: 1px solid rgba(0,0,0,0.5);
                }   

                .main .topbar.active {
                    width: calc(100vw - 0px);
                    left: 0;
                }

                .main .topbar .logo {
                    color: var(--black);
                    font-weight: 700;
                    text-decoration: none;
                    font-size: 1.4em;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .main .topbar .toggle {
                    position: relative;
                    height: 60px;
                    width: 60px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    color: var(--black);
                }

                .themeSwitch {
                    position: absolute;
                    bottom: 20px;
                    left: 40px;
                    background: var(--black);
                    color: var(--white);
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                .themeSwitch::after {
                    content: 'Switch To Night Mode';
                    position: absolute;
                    left: 40px;
                    font-size: 0.7em;
                    color: var(--black);
                    white-space: nowrap;
                    font-weight: 300;
                    letter-spacing: 1px;
                    pointer-events: none;
                     
                }

                .dark .themeSwitch::after {
                    content: 'Switch To Light Mode';     
                }

                @media (max-width: 922px) {

                .navigation {
                    left: -100%;
                }

                .navigation.active {
                    left: 0;
                    width: 100%;
                }

                .main {
                    width: 100%;
                    left: 0;
                }

                .main.active {
                    left: 100%;
                }

                .main .topbar {
                    width: 100%;
                    left: 0;
                    padding: 0 20px;
                }

                .navigation ul {
                    padding: 20px 20px;
                }

                .banner .imgBx {
                    position: relative;
                    height: 220px;
                    width: 220px;

                }

                .content h3,
                .content p {
                    text-align: center;
                    
                }

                }

                @media (max-width: 450px){
                .navigation {
                    height: calc(100vh - 100px);
                }
                }
            `}
            </style>
        </>
    )
}

export default Navbar;

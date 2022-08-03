import React from 'react'
import { NavLink } from 'react-router-dom';
import { ImPhone } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedinOption} from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { GiGamepad, GiCookingPot ,GiSing } from "react-icons/gi";
import { FcReading } from "react-icons/fc";
import { FaGlobeAmericas } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import user1 from '../../images/usermy.jpg'


const CvDownload = () => {
    return (
    <>
        <div className="text-center my-4">
        <NavLink to="/portfolio" activeClassName="selected" className="btn btn-primary"><BiArrowBack /> Go To HomePage</NavLink>
        </div>
        <div className='main-cv'>
            <div className="cvdownload" >
                <div className="left">
                    <div className="info">
                        <img src={user1} alt="profile pic" className="profile" />
                        <h3 className="text-center">Harpinder Singh</h3>
                        <p> WEB DEVELOPER </p>
                    </div>
                    <div className="line"></div>

                    <div className="contact-info">
                        <h5>CONTACT INFO</h5>
                        <ul >
                            <li><ImPhone /> <span> +917976661397 </span> </li>
                            <li><HiOutlineMail /> <span> <a href="mailto:harpinderbhullar84@gmail.com"> harpinderbhullar84@gmail.com </a> </span> </li>
                            <li><FaGlobeAmericas /> <span> <a href="https://harpinder0.github.io/portfolio/"> https://harpinder0.github.io/portfolio </a> </span> </li>
                            <li><GrLinkedinOption /> <span> <a href="https://www.linkedin.com/in/harpinder-singh-45995a208/"> LinkedIn </a></span> </li>
                            <li><GoLocation /> <span>Mohali,Punjab,India </span> </li>
                        </ul>
                    </div>

                    <div className="Education">
                        <h5>EDUCATION</h5>
                        <ul >
                            <li>
                                <p  className="year">2010-2013</p>
                                <p>MBA in Computer Science</p>
                                <p className="uniname" >University of Cambridge</p>
                            </li>
                            <br/>
                            <li>
                                <p className="year">2014-2016</p>
                                <p>Master of Computer Applications </p>
                                <p className="uniname" >University of Chicago</p>
                            </li>
                            <br/>
                            <li>
                                <p className="year">2017-2020</p>
                                <p>Bachelor of Computer Applications</p>
                                <p className="uniname" >Arunodaya University</p>
                            </li>
                        </ul>
                    </div>

                    <div className="Education">
                        <h5>EDUCATION</h5>
                        <ul >
                            <li>
                                <p>Punjabi</p>
                                <div className="myProgress">
                                    <div className="myBar" style={{width: "90% "}}></div>
                                </div>
                            </li>
                            <br/>
                            <li>
                                <p>English</p>
                                <div className="myProgress">
                                    <div className="myBar" style={{width: "45% "}}></div>
                                </div>
                            </li>
                            <br/>

                            <li>
                                <p>Hindi</p>
                                <div className="myProgress">
                                    <div className="myBar" style={{width: "85% "}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="right">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="div">
                                    <h3>PROFILE</h3>
                                    <p>Lorem ipsum dolor ratione tempora. Illo esse vero praesentium voluptatum voluptate debitis distinctio quaerat, provident. Perferendis eveniet dolorum dolor omnis explicabo doloribus voluptatibus, natus delectus, porro laudantium id modi fuga nihil aliquam asperiores impedit minima temporibus quis voluptatem quo et atque? Provident id adipisci.</p>
                                    <br/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. epudiandae nesciunt, recusandae aut fugiat accusamus. Eius sint, sit rem tenetur, corporis ullam veritatis tempore illum quae optio sunt aliquam at nobis repellat expedita. Ut, in!</p>
                                </div>
                            </div>

                            <div className="col-12 div">
                                <div className="div">
                                <h3>EXPERIENCE</h3>
                                <div className="row mb-4">
                                    <div className="col-12 col-sm-4">
                                        <p className="cname">2010 - PRESENT <br/>COMPANY NAME</p>
                                        </div>
                                    <div className="col-12 col-sm-8">
                                        <h6>React Developer</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia odit aperiam unde qui ipsum iste inventore rem facilis dolore voluptatum?</p>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-12 col-sm-4">
                                        <p className="cname">2010 - PRESENT <br/>COMPANY NAME</p>
                                        </div>
                                    <div className="col-12 col-sm-8">
                                        <h6>Java Developer</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia odit aperiam unde qui ipsum iste inventore rem facilis dolore voluptatum?</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <p className="cname">2010 - PRESENT <br/>COMPANY NAME</p>
                                        </div>
                                    <div className="col-12 col-sm-8">
                                        <h6>PHP Developer</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia odit aperiam unde qui ipsum iste inventore rem facilis dolore voluptatum?</p>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="div">
                                    <h3>PROFESSIONAL SKILLS</h3>
                                    <div className="row mb-3">
                                        <div className="col-sm-3 col-12"><p>Html</p></div>
                                        <div className="col-sm-9 col-12 d-flex align-items-center">
                                            <div className="myProgress rounded-0">
                                                <div className="myBar rounded-0" style={{width: "97% "}}></div>
                                            </div>
                                        </div>
                                    </div> 

                                     <div className="row mb-3">
                                        <div className="col-sm-3 col-12"><p>Css</p></div>
                                        <div className="col-sm-9 col-12 d-flex align-items-center">
                                            <div className="myProgress rounded-0">
                                                <div className="myBar rounded-0" style={{width: "70% "}}></div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="row mb-3">
                                        <div className="col-sm-3 col-12"><p>JavaScript</p></div>
                                        <div className="col-sm-9 col-12 d-flex align-items-center">
                                            <div className="myProgress rounded-0">
                                                <div className="myBar rounded-0" style={{width: "60% "}}></div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="row mb-3">
                                        <div className="col-sm-3 col-12"><p>Bootstrap</p></div>
                                        <div className="col-sm-9 col-12 d-flex align-items-center">
                                            <div className="myProgress rounded-0">
                                                <div className="myBar rounded-0" style={{width: "40% "}}></div>
                                            </div>
                                        </div>
                                     </div> 

                                     <div className="row mb-3 ">
                                        <div className="col-sm-3 col-12"><p>React</p></div>
                                        <div className="col-sm-9 col-12 d-flex align-items-center">
                                            <div className="myProgress rounded-0">
                                                <div className="myBar rounded-0" style={{width: "66% "}}></div>
                                            </div>
                                        </div>
                                     </div> 

                                     <div className="row ">
                                        <div className="col-sm-3 col-12"><p>Java</p></div>
                                        <div className="col-sm-9 col-12 d-flex align-items-center">
                                            <div className="myProgress rounded-0">
                                                <div className="myBar rounded-0" style={{width: "20% "}}></div>
                                            </div>
                                        </div>
                                     </div> 
                                </div>
                            </div>

                            <div className="col-12 mb-4">
                                <div className="div">
                                    <h3>INSTEREST</h3>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-3 items"> <GiGamepad /> <span className="text" > Gaming </span> </div>
                                        <div className="col-12 col-sm-6 col-md-3 items"> <GiCookingPot /> <span className="text"> Singing </span> </div>
                                        <div className="col-12 col-sm-6 col-md-3 items"> <FcReading /> <span className="text"> Reading </span> </div>
                                        <div className="col-12 col-sm-6 col-md-3 items"> <GiSing /> <span className="text"> Cooking </span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <style jsx="true">{`
            
            .main-cv {
                margin: 0 180px 10px;
            }
            
            div.cvdownload {
                display: flex;
                width: 100%;
                height: 100%;
                box-shadow: 0 0 4px 0;
            }

            .left {
                position: relative;
                top: 0;
                left: 0;
                background: #151E3D;
                display: flex;
                flex-direction: column;
                color: #fff;
                padding: 0px 30px;
            }

            .cvdownload .left .info {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .cvdownload .left .info .profile {
                height: 150px;
                width: 150px;
                border-radius: 50%;
                margin: 23px 0;
            }

            .cvdownload .left .info h3 {
                text-transform: uppercase;
                font-size: 1.2em;
                letter-spacing: 1px;
                font-weight: 500;
                color: #fff;
                line-height: 20px;
            }

            .cvdownload .left p { 
                font-size: 0.8rem;
                letter-spacing: 1.5px;
                font-weight: 300;
                color: #fff;
                margin-bottom: 2px;
            }

            .cvdownload .left p.year {
                    color: steelblue;
            }

            .cvdownload .left p.uniname {
                opacity: 0.7;
            }

            .cvdownload .left h5 {
                font-size: 1em;
                letter-spacing: 1px;
                font-weight: 600;
                margin: 25px 0 20px;
            }

            .cvdownload .left ul {
                list-style: none;
                padding: 0;
            }

            .cvdownload .left ul li {
                margin-bottom: 10px;
                white-space: nowrap;
            }
            .cvdownload .left ul li {
                color: steelblue;
            }
            .cvdownload .left ul li span {
                margin-left: 11px;
                font-size: 12px;
                color: #fff;
            }

            .cvdownload .left ul li span a {
                text-decoration: none;
                color: #fff;
            }
            

            .left .line {
                height: 1px;
                background: rgba(255,255,255,0.5);
                width: 100%;
                display: flex;
                align-self: center;
                margin-top: 25px;
            }

            .myProgress {
                width: 100%;
                background-color: #444;
                  border-radius: 5px;
              
              }
              
            .myBar {
                height: 8px;
                background-color: #2196f3;
                text-align: center;
                line-height: 30px;
                color: white;
                border-radius: 5px;
              }

            .right {
                position: relative;
                left: 0;
                width: calc(100% - 300px);
                background: #fff;
                padding: 0 20px;
            }

            .right .div h3 {
                font-size: 1.3em;
                padding: 40px 0 10px;
                letter-spacing: 1px;
                font-weight: bold;
            }

            .right .div p {
                line-height: 21px;
                margin: 0;
                font-size: 13px;
                font-weight: 400;
                opacity: 0.9;
            }

            .right .div p.cname {
                color: dimgrey;
                font-size: small;
                font-weight: 500;
            }

            .right .div h6 {
                font-size: 13px;
                font-weight: 600;
                letter-spacing: 1px;
                color: darkslateblue;
            }
            
            .right .div .text {
                font-size: small;
            }


            @media (max-width: 1176px) {
                
                .main-cv {
                    margin: 0 150px 10px;
                }
            }

            @media (max-width: 976px) {

                .main-cv {
                    margin: 30px ;
                }

                div.cvdownload {
                    flex-direction: column;
                }

                .left {
                    width: 100%;
                }

                .right {
                    width: 100%;
                }
            }

            @media (max-width: 646px) {
                
                .main-cv {
                    margin: 10px ;
                }

                .items {
                    padding-bottom: 10px;
                }

                .right .div p.cname {
                    margin-bottom: 10px;
                }

            }
            `}</style>
    </>
    )
}

export default CvDownload;

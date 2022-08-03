import React from 'react'
import Phone from '../../images/phone.png'
import Placeholder from '../../images/placeholder.png'
import Email from '../../images/email.png'


const Contact = () => {
    return (
        <>
            <section className="contact adjust" id="contact">
                <div className="title">
                    <h2>Contact Us</h2>
                </div>
                <div className="contactForm">
                    <div className="row1">
                        <img alt="phone" src={Phone} />
                        <div className="info">
                            <h6>CONTACT NUMBER</h6>
                            <span>+917976661397</span>
                        </div>
                    </div>
                    <div className="row1">
                    <img alt="email" src={Email} />
                    <div className="info">
                            <h6>EMAIL ADDRESS</h6>
                            <span><a href="mailto:harpinderbhullar84@gmail.com">harpinderbhullar84@gmail.com</a></span>
                        </div>
                    </div>
                    <div className="row1">
                    <img alt="placeholder" src={Placeholder} />
                    <div className="info">
                            <h6>ADDRESS</h6>
                            <span>Mohali, Punjab, India</span>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx="true">{`
            .contact {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
            }

            .contact .contactForm {
                position: relative;
                width: 100%;
                max-width: 700px;
            }

            .contact .contactForm .row1 {
                width: 100%;
                margin-top: 40px;   
                display: flex;             
            }

            

            .contact .contactForm .row1
           {
                width: 100%;
                padding: 10px;
                border: none;
                outline: none;
                color: var(--black);
                font-size: 16px;
            }

            .contact .contactForm .row1 .info {
                margin-left: 16px;
            }

            .contact .contactForm .row1 .info h6 {
                color: cornflowerblue;
                font-weight: bolder;
            }

            .contact .contactForm .row1 .info span {
                font-size: medium;
                color: var(--black);
                
            }

            .contact .contactForm .row1 .info span a {
                text-decoration: none;
                color: var(--black);
                
            }

        
            @media (max-width: 767px) {

                .contact {
                    margin-bottom: 100px;
                }

                .contact .contactForm .row1 {
                    grid-template-columns: repeat(1,1fr);
                }
            }



            `}</style>
        </>
    )
}

export default Contact;

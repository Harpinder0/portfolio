import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="contact adjust" id="contact">
                <div className="title">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, hic.</p>
                </div>
                <div className="contactForm">
                    <div className="row1">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className="row1">
                        <input type="email" placeholder='Email Address' />
                        <input type="num" placeholder='Mobile No.' />
                    </div>
                    <div className="row2">
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <div className="row2">
                        <input type="submit" value='Send'/>
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
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 20px;
                margin-top: 20px;                
            }

            .contact .contactForm .row2 {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;                
            }

            .contact .contactForm .row1 input,
            .contact .contactForm .row2 textarea{
                width: 100%;
                padding: 10px;
                border: none;
                outline: none;
                color: var(--black);
                background: var(--white2);
                font-size: 16px;
                border: 1px solid rgba(0, 0, 0, 0.2);
            }

            .contact .contactForm .row2 textarea {
                resize: none;
                height: 150px;
            }

            .contact .contactForm .row2 input[type="submit"] {
                background: var(--black2);
                color: #fff;
                padding: 10px 30px;
                display: inline-block;
                font-weight: 500;
                letter-spacing: 2px;
                cursor: pointer;
                font-size: 16px;
                text-transform: uppercase;
                max-width: 150px;
                border: none;
            }

            .dark .contact .contactForm .row2 input[type="submit"]:hover {
                background: #2196f3;
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

import React from 'react'
import TestimonialsData from './TestimonialsData'

const Testimonials = () => {
    return (
        <>
            <section className="testimonials adjust" id="testimonials">
                <div className="title">
                    <h2>Testimonials</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, hic.</p>
                </div>
                <div className="content">
                        
                    {
                        TestimonialsData.map((curt) => {
                            return (
                                <div className="testimonialsBox" key={curt.id}>
                                    <div className="imgBx">
                                        <img src={curt.src} alt={curt.alt} />
                                    </div>
                                    <p>{curt.about}</p>
                                    <h4>{curt.info} <br/> <span>{curt.title}</span></h4>
                                </div>
                            )
                        }) 
                    }
                    
                </div>
            </section>

            <style jsx="true">{`
            
            .testimonials .content {
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 20px;
                margin: 40px 0;
            }

            .testimonials .content .testimonialsBox {
                background: var(--white2);
                border: 1px solid rgba(0, 0, 0, 0.05);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                padding: 20px;
            }

            .dark .testimonials .content .testimonialsBox:hover {
                background: #2196f3;
            }

            .testimonials .content .testimonialsBox .imgBx {
                position: relative;
                width: 80px;
                height: 80px;
                margin-bottom: 10px;
            } 

            .testimonials .content .testimonialsBox .imgBx img {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            .testimonials .content .testimonialsBox p {
                font-style: italic;
            }

            .testimonials .content .testimonialsBox h4 {
                text-align: right;
                text-transform: uppercase;
                letter-spacing: 2px;
                line-height: 1.2em;
                font-size: 1em;
                margin-top: 20px;
                color: var(--black);
                font-weight: 600;
                border-right: 4px solid var(--black);
                padding-right: 10px;;
            }

            .testimonials .content .testimonialsBox h4 span {
                text-transform: initial;
                color: #aaa;
                letter-spacing: 1px;
                font-weight: 300;
                font-size: 0.7em;
            }

            .dark .testimonials .content .testimonialsBox h4 span {
                color: #fff;
            }

            @media (max-width: 767px) {

                .testimonials .content {
                    grid-template-columns: repeat(1,1fr);
                }
            }

            `}</style>
        </>
    )
}

export default Testimonials;

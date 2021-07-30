import React from 'react'
import ServiceData from './ServiceData'

const Service = () => {
    return (
        <>
            <section className="service adjust" id="service">
                    <div className="title">
                        <h2>Our Service</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Itaque quia.</p>
                    </div>
                    <div className="content">

                        {
                            ServiceData.map((ele) => {
                                return (    
                                    <div className="serviceBox" key={ele.id}>
                                        <img src={ele.src} alt="icon" />
                                        <h2>{ele.title}</h2>
                                        <p>{ele.info}</p>
                                    </div>           
                                )
                            })
                        }

                    </div>
            </section>

            <style jsx="true">{`
            
            .service .content {
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-gap: 20px;
                margin: 40px 0;
            }

            .service .content .serviceBox {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid rgba(0,0,0,0.05);
                padding: 20px 10px;
                background: var(--white2);
            }

            .dark .service .content .serviceBox:hover {
                background: #2196f3;
            }

            .service .content .serviceBox img {
                max-width: 50px;
            }

            .dark .service .content .serviceBox img {
                filter: invert(1);
            }

            .service .content .serviceBox h2 {
                font-size: 1.1em;
                margin: 20px 0 10px;
                font-weight: 600;
                color: var(--black);
                text-align: center;
                letter-spacing: 2px;
                text-transform: uppercase;
            }

            .service .content .serviceBox p {
                text-align: center;
            }

            @media (max-width: 922px) {

                .service .content {
                    grid-template-columns: repeat(2,1fr);
                }
            }

            @media (max-width: 767px) {

                .service .content {
                    grid-template-columns: repeat(1,1fr);
                }
            }
            

            `}</style>

        </>

    )
}

export default Service;

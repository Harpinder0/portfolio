import React from 'react'
import Bg1 from '../images/bg1.jpg'

const About = () => {
    return (
        <>
            <section className="about adjust" id="about">
                <div className="title">
                    <h2>About Me</h2>
                </div>
                <div className="content">
                    <div className="textBox">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatibus error voluptates veritatis labore. possimus quam hic sint. Aliquam ipsum rem laborum rerum recusandae eaque id mollitia Porro tempora in beatae iure exercitationem modi fugit perspiciatis consequuntur recusandae..
                        <br/> <br/>
                        Dolore, et accusamus deserunt expedita atque quas praesentium cum iste reprehenderit excepturi laborum. delectus aliquid libero temporibus ullam voluptate doloribus sint quos aspernatur.</p>
                    </div>
                    <div className="imgBx">
                        <img src={Bg1} alt="photography" />
                    </div>
                </div>
            </section>

            <style jsx="true">{`
    
            .adjust {
                position: relative;
                min-height: 100vh;
                width: 100%;
                padding: 0 40px;
                padding-top: 80px;
                background: var(--white); 
                color: var(--black); 
                display: inline-block;              
            }

            .title {
                width: 100%;
                text-align: center;
            }

            .title h2 {
                margin-bottom: 30px;
                position: relative;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 1.2em;
            }
            
            .title h2::before {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -10px;
                width: 50px;
                height: 1px;
                background: var(--black);
            }

            .about .content {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
            }

            .about .content .textBox {
                width: 49%;
                min-width: 49%;
            }

            .about .content .imgBx {
                margin-left: 40px;
            }

            .about .content .imgBx img {
                max-width: 100%;
            }

            @media (max-width: 922px) {

                .adjust {
                    padding: 80px 20px 0;
                }

                .about .content {
                    flex-direction: column;
                }

                .about .content .textBox {
                    width: 100%;
                    min-width: 100%;
                }

                .about .content .imgBx {
                    margin: 20px 0 0;
                    display: flex;
                    justify-content: center;
                }

            `}</style>
        </>
    )
}

export default About

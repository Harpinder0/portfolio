import React from 'react'

const About = () => {
    return (
        <>
            <section className="about adjust" id="about">
                <div className="title">
                    <h2>About Me</h2>
                </div>
                <div className="content">
                    <div className="textBox">
                        <p>
                        I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                        <br/> <br/>
                        Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
                        <br/> <br/>
                        You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:
                       </p>
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

            about .content {
                display: flex;
                margin-top: 40px;
            }

            .about .content .textBox {
                width: 100%;
                min-width: 100%;
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

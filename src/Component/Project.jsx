import React from 'react'
import ProjectData from './ProjectData';

const Project = () => {
    return (
        <>
           <section className="project adjust" id="project">
                <div className="title">
                    <h2>Recent Work</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, hic.</p>
                </div>

                <div className="content">
                    {
                        ProjectData.map((curVal) => {
                            return (
                                <div className="workBx" key={curVal.id}>
                                    <div className="imgBx">
                                        <img src={curVal.src} alt={curVal.alt} />
                                    </div>
                                    <div className="textBx">
                                        <h3>{curVal.name}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <style jsx="true">{`
            
            .project .content {
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-gap: 20px;
                margin: 40px;
            }

            .project .content .workBx {
                position: relative;
                width: 100%;
                height: 300px;
                overflow: hidden;
            }

            .project .content .workBx .imgBx {
                position: relative;
                width: 100%;
                height: 100%;
                transform: translateY(0);
                transition: 0.5s ease-in-out;
            }

            .project .content .workBx:hover .imgBx {
                transform: translateY(-100%);
            }

            .project .content .workBx .imgBx img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .project .content .workBx .textBx {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--black);
                display: flex;
                justify-content: center;
                align-items: center;
                transform: translateY(100%);
                transition: 0.5s ease-in-out;
            }

            .dark .project .content .workBx .textBx {
                background: #444;
            }

            .project .content .workBx:hover .textBx {
                transform: translateY(0);
            }

            .project .content .workBx .textBx h3 {
                color: #fff;
                font-size: 1em;
            }

            @media (max-width: 922px) {

                .project .content {
                    grid-template-columns: repeat(2,1fr);
                }
            }

            @media (max-width: 767px) {

                .project .content {
                    grid-template-columns: repeat(1,1fr);
                }
            }
            

            `}</style>
        </>
    )
}

export default Project;

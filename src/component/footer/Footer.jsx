import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear(); 

    return (
        <>
            <div className="copyright">
                <p>Copy © {year} Harpinder Singh. All Right Reserved.</p>
            </div>

            <style jsx="true">{`
            
            .copyright {
                position: relative;
                bottom: 0;
                padding: 10px 40px;
                text-align: center;
            }

            @media (max-width: 767px) {
                
                .copyright {
                    padding: 10px 20px;
                }
            }

            

            `}</style>
        </>
    )
}

export default Footer;

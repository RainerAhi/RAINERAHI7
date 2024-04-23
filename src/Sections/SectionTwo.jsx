import React from "react";

export const SectionTwo = () => {

    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

    return (
        <section className="footer" id="footer" >
            <div className="footer-top" >
                <h1 className="footer-text" >I can help you with...</h1>
                <div className="footer-list" >
                    <h1 className="footer-headline" >E-commerce</h1>
                    <h1 className="footer-headline" >Website Design</h1>
                    <h1 className="footer-headline" >Digital Products</h1>
                    <h1 className="footer-headline" >Brand Identities</h1>
                </div>
            </div>
            <div className="footer-divider" />
            <div className="footer-bottom" >
                <div className="footer-bottom-left" >
                    <h1 className="footer-text" >Skilled Front-End Developer proficient in JavaScript, HTML & CSS, React, and THREEjs. Notable entrepreneur and programmer from Estonia, honored with multiple national awards. Successful YouTube content creator with 30K+ subscribers and 35M+ views. Also, a part-time track & field athlete.</h1>
                </div>
                <div className="footer-bottom-right" >
                    <div className="footer-button" >
                        <h1 className="footer-text" onClick={() => handleClick('https://www.fiverr.com/rainer_ahi?public_mode=true')} >Fiverr</h1>
                    </div>
                    <div className="footer-button" >
                        <h1 className="footer-text" onClick={() => handleClick('https://peakcreations.vercel.app/')} >Agency</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
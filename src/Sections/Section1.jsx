import React from "react";
import { motion } from "framer-motion"

export const Section1 = () => {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };

  return (
    <section className="section" >
      <div className="one-content">
        <div className="one-content-inside" >

          <div className="introduction" >
            <div className="profile-picture" />
            <h1 className="introduction-name">Rainer Ahi</h1>
            <h1 className="introduction-skills">Entrepreneur, Developer & Athlete</h1>
            <div className="introduction-socials">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://x.com/L7XICZ')}
              >
                <i class="fa-brands fa-twitter"></i>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.instagram.com/rainerahi/')}
              >
                <i class="fa-brands fa-instagram"></i>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://github.com/RainerAhi')}
              >
                <i class="fa-brands fa-github"></i>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.youtube.com/channel/UCxp7IFoUEtt7TPNDgJ-7AzQ')}
              >
                <i class="fa-brands fa-youtube"></i>
              </motion.div>
            </div>
          </div>

          <div className="border" />

          <div className="about">
            <h1 className="about-text" >About</h1>
            <h1 className="about-description" >Skilled Front-End Developer proficient in JavaScript, HTML & CSS, React, and THREEjs. Notable entrepreneur and programmer from Estonia, honored with multiple national awards. Successful YouTube content creator with 30K+ subscribers and 35M+ views. Also, a part-time track & field athlete.</h1>
          </div>

          <div className="experience">
            <h1 className="experience-text" >Experience</h1>
            <ul>
              <div className="list-border" />
              <li class="flex-item grey-marker">
                <div>
                  <h1 className="experience-description" >Dialedweb (June 2024 - Present)</h1>
                  <h1 className="experience-small-description" >Agency offering web services</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Peak Creations (May 2024 - Present)</h1>
                  <h1 className="experience-small-description" >Web agency offering many services</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Freelancer (Dec 2023 - Present)</h1>
                  <h1 className="experience-small-description" >Creating modern 3D websites</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Studenx (Jul 2022 - Apr 2023)</h1>
                  <h1 className="experience-small-description" >Building an investing themed learning app</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Content Creation (Mar 2020 - May 2022)</h1>
                  <h1 className="experience-small-description" >Growing YouTube channels to 30k subscribers</h1>
                </div>
              </li>
            </ul>
          </div>

          <div className="projects">
            <h1 className="projects-text" >Projects</h1>
            <div className="projects-container" >

              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.dialedweb.com/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-bars"></i>
                </div>
                <h1 className="project-title" >Dialedweb</h1>
                <h1 className="project-description" >Built a website for an agency that offers all kinds of web services.</h1>
              </motion.div>

              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://stalik.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-house"></i>
                </div>
                <h1 className="project-title" >Stalik</h1>
                <h1 className="project-description" >Created a personal website for a real estate professional.</h1>
              </motion.div>

              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://room-example.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h1 className="project-title" >Siemensstr.30</h1>
                <h1 className="project-description" >Developed an immersive 3D website with scroll-animations.</h1>
              </motion.div>

              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://dialedwebseltzers.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-mug-saucer"></i>
                </div>
                <h1 className="project-title" >Seltzers</h1>
                <h1 className="project-description" >Developed a brand's scroll-animated 3D landing page.</h1>
              </motion.div>

              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://car-configurator-rainer-ahi.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-car"></i>
                </div>
                <h1 className="project-title" >Porsche Configurator</h1>
                <h1 className="project-description" >Developed an immersive website to configurate the Porsche 911.</h1>
              </motion.div>

              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://project-cryptosite.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-coins"></i>
                </div>
                <h1 className="project-title" >YTFIN</h1>
                <h1 className="project-description" >Developed a modern 3D website with many scroll-animations.</h1>
              </motion.div>
              
              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://chess-facts-rainer-ahi.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-chess"></i>
                </div>
                <h1 className="project-title" >Chess Facts</h1>
                <h1 className="project-description" >Developed a scroll-animated 3D website showcasing a chess game.</h1>
              </motion.div>
              
              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://rainer-ahi-configurator.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-gears"></i>
                </div>
                <h1 className="project-title" >Simple Configurator</h1>
                <h1 className="project-description" >Developed a minimalistic and simple configurator.</h1>
              </motion.div>
              
              <motion.div
                className="project"
                whileHover={{ y: -10, }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://apple-vision-pro-immersive-website.vercel.app/')}
              >
                <div className="project-icon">
                  <i class="fa-solid fa-vr-cardboard"></i>
                </div>
                <h1 className="project-title" >Vision Pro</h1>
                <h1 className="project-description" >Developed a website with 3D scroll-animations.</h1>
              </motion.div>            

            </div>
          </div>

          <div className="need-a-website">
            <h1 className="about-text" >Need a website?</h1>
            <h1 className="about-description" >Are you looking for a modern, beautiful website with stunning scroll animations and immersive 3D models? Contact me on Fiverr, and let’s bring your vision to life!</h1>
              <motion.div
                className="fiverr-button"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.fiverr.com/rainer_ahi')}
              >
                <h1 className="fiverr-text" >Fiverr</h1>
                <i class="fa-solid fa-location-arrow"></i>
              </motion.div>
          </div>

          <div className="border" />

          <div className="footer">
            <h1 className="footer-description" >© 2024 - Rainer Ahi</h1>
          </div>   

        </div>
      </div>
    </section>
  )
}
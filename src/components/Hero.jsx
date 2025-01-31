import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.topSection}>
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h1 className={styles.introHeading}>Hello, I'm</h1>
            <h2 className={styles.introName}>Shubham S Kawalikai,</h2>
            <h3 className={styles.introRole}>Software Engineer</h3>
          </div>
        </section>

        <section className={styles.profileSection}>
          <img 
            src="/Profile-Pic.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </section>

        <section className={styles.socialLinks}>
          <a 
            href="https://www.linkedin.com/in/shubham-kawalikai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img 
              src="/LinkedIn-logo.png"
              alt="LinkedIn" 
              className={styles.socialIconImage}
            />
          </a>
          <a 
            href="https://github.com/Shubhamsk03" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img src="/Github-logo.png" alt="GitHub" className={styles.socialIconImage} />
          </a>
          <a 
            href="/resume.pdf" 
            download="Shubham_Kawalikai_Resume.pdf"
            className={styles.downloadButton}
          >
            Download Resume
          </a>
        </section>
      </div>

      <div className={styles.bottomSection}>
      <div></div>
        <section className={styles.aboutSection}>
          <h2 className={styles.aboutHeading}>about.</h2>
          <p className={styles.aboutText}>
            I'm a Software Engineer with expertise in full-stack development, currently working at Techcanopy Software Labs. 
            My experience spans across building scalable web applications using React, AWS, Symfony, and various other technologies. 
            I specialize in developing user-centric solutions, from multi-portal WiFi management systems to optimized admin applications 
            for EdTech platforms. With a strong foundation in both front-end and back-end development, I focus on creating efficient, 
            maintainable code while implementing innovative solutions for complex business requirements. I'm passionate about optimizing 
            application performance and creating intuitive user experiences.
          </p>
        </section>
        {/* Empty div to maintain grid layout */}
        
      </div>
    </main>
  )
}

export default Hero 
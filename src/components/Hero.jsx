import React, { useState, useEffect } from 'react'
import styles from '../styles/Hero.module.css'
import content from '../content/content.json'

const Hero = () => {
  const { hero } = content;
  const greetings = ["Hello", "ನಮಸ್ಕಾರ", "नमस्ते", "Hallo"]; // English, Kannada, Hindi, German
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreeting(prev => {
        const currentIndex = greetings.indexOf(prev);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 1000); // 500ms = half second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <main className={styles.mainContent}>
      <div className={styles.heroBackground}></div>
      <div className={styles.topSection}>
        <div className={styles.bouncingCircle1}></div>
        <div className={styles.bouncingCircle2}></div>
        <div className={styles.bouncingCircle3}></div>
        <div className={styles.bouncingCircle4}></div>
        <div className={styles.bouncingCircle5}></div>
        <div className={styles.bouncingCircle6}></div>
        
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h1 className={styles.introHeading}>{currentGreeting}, I am</h1>
            <h2 className={styles.introName}>{hero.intro.name}</h2>
            <h3 className={styles.introRole}>{hero.intro.role}</h3>
          </div>
          
          <section className={styles.socialLinks}>
            <a 
              href={hero.social.linkedin.url}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img 
                src="/LinkedIn-logo.png"
                alt={hero.social.linkedin.alt}
                className={styles.socialIconImage}
              />
            </a>
            <a 
              href={hero.social.github.url}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img 
                src="/Github-logo.png" 
                alt={hero.social.github.alt} 
                className={styles.socialIconImage} 
              />
            </a>
            <a 
              href="/ShubhamResume.pdf"
              download={hero.social.resume.filename}
              className={styles.downloadButton}
            >
              {hero.social.resume.buttonText}
            </a>
          </section>
        </section>

        <section className={styles.profileSection}>
          <img 
            src="/SHUBHAMPhoto.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
        </section>
      </div>

      <div className={styles.bottomSection}>
        <div></div>
        <section className={styles.aboutSection}>
          <h2 className={styles.aboutHeading}>{hero.about.heading}</h2>
          <p className={styles.aboutText}>{hero.about.text}</p>
        </section>
      </div>
    </main>
  )
}

export default Hero 
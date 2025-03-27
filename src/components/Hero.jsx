import React, { useState, useEffect } from 'react'
import styles from '../styles/Hero.module.css'
import content from '../content/content.json'

const Hero = () => {
  const { hero } = content;
  
  // Array of "Hello" in different languages
  const greetings = ["ನಮಸ್ಕಾರ", "నమస్కారం", "नमस्ते", "Hallo", "Bonjour", "Hello"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Animation duration constants
    const fadeTime = 300; // 300ms for fade in/out 
    const cycleTime = 1000; // 1000ms (1 second) total cycle time
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for fade-out animation to complete
      setTimeout(() => {
        setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setIsAnimating(false);
      }, fadeTime); // Time for the fade-out effect
      
    }, cycleTime); // Change every 1 second (1000ms)
    
    return () => clearInterval(interval);
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
            <h1 className={styles.introHeading}>
              <span className={`${styles.animatedGreeting} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
                {greetings[currentGreetingIndex]} ,
              </span>
            </h1>
            <h2 className={styles.introName}>My name is</h2>
            <h3 className={styles.introRole}>{hero.intro.name}</h3>
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
          </section>
        </section>

        {/* <section className={styles.profileSection}>
          <img 
            src="/SHUBHAMPhoto.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
        </section> */}
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
import React from 'react'
import styles from '../styles/Hero.module.css'
import content from '../content/content.json'

const Hero = () => {
  const { hero } = content;
  
  return (
    <main className={styles.mainContent}>
      <div className={styles.heroBackground}></div>
      <div className={styles.topSection}>
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h1 className={styles.introHeading}>{hero.intro.greeting}</h1>
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
              href="/Resume-Shubham.pdf"
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
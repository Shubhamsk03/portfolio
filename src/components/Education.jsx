import React from 'react'
import styles from '../styles/Education.module.css'
import content from '../content/content.json'

const Education = () => {
  const { education } = content;

  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.heading}>{education.heading}</h2>
      {education.institutions.map((edu, index) => (
        <div key={index} className={styles.educationCard}>
          <div className={styles.educationInfo}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.institution}>{edu.institution}</p>
            <p className={styles.duration}>{edu.duration}</p>
            <p className={styles.gpa}>{edu.score}</p>
          </div>
          <div className={styles.logoContainer}>
            <img 
              src={edu.logo.src} 
              alt={edu.logo.alt} 
              className={styles.instituteLogo}
            />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Education 
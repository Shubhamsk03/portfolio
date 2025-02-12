import React from 'react'
import styles from '../styles/Education.module.css'

const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.educationCard}>
        <div className={styles.educationInfo}>
          <h3 className={styles.degree}>Bachelor of Engineering ( Computer Science )</h3>
          <p className={styles.institution}>SJB Insititute of Technology, Bangalore, India</p>
          <p className={styles.duration}>March 2019 - March 2023</p>
          <p className={styles.gpa}>CGPA: 8.77</p>
        </div>
        <div className={styles.logoContainer}>
          <img 
            src="/SJBIT-logo.png" 
            alt="SJBIT Logo" 
            className={styles.instituteLogo}
          />
        </div>
      </div>

      <div className={styles.educationCard}>
        <div className={styles.educationInfo}>
          <h3 className={styles.degree}>Pre University College</h3>
          <p className={styles.institution}>Sadana PU College, Bangalore, India</p>
          <p className={styles.duration}>March 2017 - March 2019</p>
          <p className={styles.gpa}>Percentage: 85%</p>
        </div>
        <div className={styles.logoContainer}>
          <img 
            src="/SADANA-logo.png" 
            alt="Sadana PU College Logo" 
            className={styles.instituteLogo}
          />
        </div>
      </div>

      <div className={styles.educationCard}>
        <div className={styles.educationInfo}>
          <h3 className={styles.degree}>High School</h3>
          <p className={styles.institution}>The New Cambridge English School, Bangalore, India</p>
          <p className={styles.duration}>March 2005 - March 2017</p>
          <p className={styles.gpa}>Percentage: 90%</p>
        </div>
        <div className={styles.logoContainer}>
          <img 
            src="/TNCES-logo.png" 
            alt="The New Cambridge English School Logo" 
            className={styles.instituteLogo}
          />
        </div>
      </div>
      
    </section>
  )
}

export default Education 
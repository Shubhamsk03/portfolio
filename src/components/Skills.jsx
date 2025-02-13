import React from 'react';
import styles from '../styles/Skills.module.css';
import content from '../content/content.json';

const Skills = () => {
  const { skills } = content;

  return (
    <section id="skills">
      <h2 className={styles.heading}>{skills.heading}</h2>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {[...skills.technologies, ...skills.technologies].map((tech, index) => (
              <div key={index} className={styles.slide}>
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className={styles.techLogo}
                />
                <p className={styles.techName}>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
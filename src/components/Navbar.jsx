import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>SSK</div>
      <nav>
        <ul className={styles.nav}>
          <li 
            className={styles.navItem}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </li>
          <li 
            className={styles.navItem}
            onClick={() => scrollToSection('certifications')}
          >
            Certifications
          </li>
          <li 
            className={styles.navItem}
            onClick={() => scrollToSection('education')}
          >
            Education
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar 
import React from 'react'
import styles from '../styles/Navbar.module.css'
import content from '../content/content.json'

const Navbar = () => {
  const { navbar } = content;
  const { resume } = content.hero.social;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const downloadResume = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = `/${resume.filename}`;
    link.download = resume.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{navbar.logo}</div>
      <nav>
        <ul className={styles.nav}>
          {navbar.menuItems.map((item, index) => (
            <li 
              key={index}
              className={styles.navItem}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
          <li 
            className={`${styles.navItem} ${styles.resumeBtn}`}
            onClick={downloadResume}
          >
            {resume.buttonText}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar 
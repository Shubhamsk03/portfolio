import React from 'react'
import styles from '../styles/Navbar.module.css'
import content from '../content/content.json'

const Navbar = () => {
  const { navbar } = content;

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
        </ul>
      </nav>
    </header>
  )
}

export default Navbar 
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {currentYear} Shubham S Kawalikai. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          {/* <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a> */}
          {/* <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer 
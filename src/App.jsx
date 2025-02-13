import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Footer from './components/Footer'
import styles from './styles/App.module.css'

function App() {
  return (
    <div className={styles.portfolioContainer}>
      {/* Decorative circles */}
      <div className={styles.decorativeCircleLarge} />
      <div className={styles.decorativeCircleSmall} />

      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Certifications />
      <Education />
      <Footer />
    </div>
  )
}

export default App 
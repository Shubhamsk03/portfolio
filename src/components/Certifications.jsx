import React from 'react'
import styles from '../styles/Certifications.module.css'

const Certifications = () => {
  return (
    <section id="certifications" className={styles.container}>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.certificatesGrid}>
        <div className={styles.certificateCard}>
          {/* Certificate 1 */}
        </div>
        <div className={styles.certificateCard}>
          {/* Certificate 2 */}
        </div>
        <div className={styles.certificateCard}>
          {/* Certificate 3 */}
        </div>
        <div className={styles.certificateCard}>
          {/* Certificate 4 */}
        </div>
      </div>
    </section>
  )
}

export default Certifications 
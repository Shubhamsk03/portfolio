import React from 'react'
import styles from '../styles/Certifications.module.css'
import content from '../content/content.json'

const Certifications = () => {
  const { certifications } = content;

  const handleCertificateClick = (certificateUrl) => {
    if (certificateUrl) {
      window.open(certificateUrl, '_blank');
    }
  };

  return (
    <section id="certifications" className={styles.container}>
      <h2 className={styles.heading}>{certifications.heading}</h2>
      <div className={styles.certificatesGrid}>
        {certifications.certificates.map((cert, index) => (
          <div 
            key={index} 
            className={styles.certificateCard}
            onClick={() => handleCertificateClick(cert.certificate)}
            style={{ cursor: cert.certificate ? 'pointer' : 'default' }}
            title={cert.certificate ? "Click to view certificate" : ""}
          >
            <div className={styles.logoContainer}>
              <img 
                src={cert.logo.src} 
                alt={cert.logo.alt} 
                className={styles.certificateLogo}
              />
            </div>
            <div className={styles.certificateInfo}>
              <h3 className={styles.certificateTitle}>{cert.title}</h3>
              <p className={styles.provider}>{cert.provider}</p>
              <p className={styles.duration}>{cert.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications 
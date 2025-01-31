import React from 'react'

const WorkExperience = () => {
  const styles = {
    container: {
      padding: '4rem 0',
      backgroundColor: '#E6DCC3',
    },
    heading: {
        fontSize: '48px',
        color: '#4A3F35',
        marginBottom: '3rem',
        textAlign: 'center',
        fontWeight: '600',
      },
    rightContent: {
      maxWidth: '90%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gap: '2rem',
    },
    leftContent: {
      maxWidth: '90%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: '2rem',
    },
    projectCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '20px',
      padding: '2rem',
      marginBottom: '1.5rem'
    },
    companyCard: {
      backgroundColor: '#8B4513',
      borderRadius: '20px',
      padding: '2rem',
      color: '#FFFFFF',
      position: 'sticky',
      top: '2rem',
      marginBottom: '1.5rem',
    },
    projectTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    projectRole: {
      fontSize: '14px',
      marginBottom: '0.5rem'
    },
    technologies: {
      fontSize: '14px',
      marginBottom: '1rem'
    },
    bulletPoints: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    bulletPoint: {
      position: 'relative',
      paddingLeft: '1rem',
      marginBottom: '0.5rem',
      fontSize: '14px',
      lineHeight: '1.5',
      '::before': {
        content: '"•"',
        position: 'absolute',
        left: 0
      }
    },
    companyName: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    companyRole: {
      fontSize: '20px',
      marginBottom: '1rem'
    },
    duration: {
      fontSize: '14px',
      marginBottom: '0.25rem'
    },
    location: {
      fontSize: '14px'
    }
  }

  return (
    <section id="experience" style={styles.container}>
      <h2 style={styles.heading}>Work Experience</h2>
      <div style={styles.rightContent}>
        {/* Left side - Projects */}
        <div>
          {/* Techcanopy Software Labs */}
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Project: Multi-User WiFi Management System</h3>
            <p style={styles.projectRole}>Role: Full Stack Developer</p>
            <p style={styles.technologies}>Technologies: Symfony, HTML, JavaScript, MySQL, SOAP APIs</p>
            <ul style={styles.bulletPoints}>
              <li style={styles.bulletPoint}>
                Developed a multi-portal WiFi management system for a service provider, supporting
                individual customers, corporate clients, administrators, and resellers.
              </li>
              <li style={styles.bulletPoint}>
                Created APIs in Symfony to integrate with internal services for seamless WiFi allocation,
                plan management, and user accounts.
              </li>
              <li style={styles.bulletPoint}>
                Designed diverse subscription plans with flexible data limits, speeds, and multiple
                payment methods (credit/debit cards, digital wallets, and offline options).
              </li>
              <li style={styles.bulletPoint}>
                Collaborated with the frontend team to ensure responsive and user-friendly portals.
              </li>
              <li style={styles.bulletPoint}>
                Engineered MySQL database schemas to efficiently manage data related to users, plans,
                and transactions.
              </li>
            </ul>

            <h3 style={styles.projectTitle}>Project: Admin Application Optimization (EdTech Platform)</h3>
            <p style={styles.projectRole}>Role: Web Developer</p>
            <p style={styles.technologies}>Technologies: PHP, MySQL, HTML, CSS, JavaScript</p>
            <ul style={styles.bulletPoints}>
              <li style={styles.bulletPoint}>
                Optimized an admin application for handling large datasets and addressing
                performance issues.
              </li>
              <li style={styles.bulletPoint}>
                Improved query performance by redesigning SQL queries and implementing database
                indexing, enhancing application responsiveness.
              </li>
              <li style={styles.bulletPoint}>
                Designed an export functionality for large datasets using a job-based processing
                system to manage export requests and generate Excel reports.
              </li>
            </ul>
    
            <h3 style={styles.projectTitle}>Project: Client Application for EdTech Platform</h3>
            <p style={styles.projectRole}>Role: Full Stack Developer</p>
            <p style={styles.technologies}>Technologies: React Native, Node.js, HTML, CSS, JavaScript</p>
            <ul style={styles.bulletPoints}>
              <li style={styles.bulletPoint}>
                Designed a user-friendly interface for creating resumes with complex UI screens and
                modals.
              </li>
              <li style={styles.bulletPoint}>
                Integrated database data retrieval for auto-populating resumes with relevant details.
              </li>
              <li style={styles.bulletPoint}>
                Developed a template-based system, enabling users to choose templates and
                purchase additional ones.
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - Company Info */}
        <div style={styles.companyCard}>
          <h2 style={styles.companyName}>Techcanopy Software labs</h2>
          <p style={styles.companyRole}>Software Engineer</p>
          <p style={styles.duration}>April 2023 - Present</p>
          <p style={styles.location}>Bangalore, India</p>
        </div>
      </div>

      <div style={styles.leftContent}>
        {/* Left side - Company Info */}
        <div style={styles.companyCard}>
          <h2 style={styles.companyName}>Techcanopy Software labs</h2>
          <p style={styles.companyRole}>Intern</p>
          <p style={styles.duration}>Feb 2023 - June 2023</p>
          <p style={styles.location}>Bangalore, India</p>
        </div>
        
        {/* Right side - Internship Project Card */}
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Internship Project: Recruitment Application Development</h3>
          <p style={styles.projectRole}>Role: Intern</p>
          <p style={styles.technologies}>Technologies: React, AWS</p>
          <ul style={styles.bulletPoints}>
            <li style={styles.bulletPoint}>
              Simplified the hiring process through a recruitment application.
            </li>
            <li style={styles.bulletPoint}>
              Developed two primary login modules:
            </li>
            <li style={styles.bulletPoint}>
              User Login: Enabled candidates to register, create profiles, and apply for roles.
            </li>
            <li style={styles.bulletPoint}>
              Partner Login: Allowed talent partners to submit candidate details via a dedicated interface.
            </li>
            <li style={styles.bulletPoint}>
              Facilitated manual review and filtering of candidate submissions by recruitment teams.
            </li>
            <li style={styles.bulletPoint}>
              Enabled automated email updates to candidates and talent partners.
            </li>
            <li style={styles.bulletPoint}>
              Improved efficiency in managing candidate profiles and communication during the hiring process.
            </li>
          </ul>
        </div>
      </div>
      
      {/* Add after the last experience */}
      <div style={styles.rightContent}>
        
        
        {/* Right side - Internship Project Card */}
        <div style={styles.projectCard}>
          <h3 style={styles.projectTitle}>Internship Project: Recruitment Application Development</h3>
          <p style={styles.projectRole}>Role: Intern</p>
          <p style={styles.technologies}>Technologies: React, AWS</p>
          <ul style={styles.bulletPoints}>
            <li style={styles.bulletPoint}>
              Simplified the hiring process through a recruitment application.
            </li>
            <li style={styles.bulletPoint}>
              Developed two primary login modules:
            </li>
            <li style={styles.bulletPoint}>
              User Login: Enabled candidates to register, create profiles, and apply for roles.
            </li>
            <li style={styles.bulletPoint}>
              Partner Login: Allowed talent partners to submit candidate details via a dedicated interface.
            </li>
            <li style={styles.bulletPoint}>
              Facilitated manual review and filtering of candidate submissions by recruitment teams.
            </li>
            <li style={styles.bulletPoint}>
              Enabled automated email updates to candidates and talent partners.
            </li>
            <li style={styles.bulletPoint}>
              Improved efficiency in managing candidate profiles and communication during the hiring process.
            </li>
          </ul>
        </div>
        {/* Left side - Company Info */}
        <div style={styles.companyCard}>
          <h2 style={styles.companyName}>Zeliot</h2>
          <p style={styles.companyRole}>Intern</p>
          <p style={styles.duration}>Dec 2022 - Feb 2023</p>
          <p style={styles.location}>Bangalore, India</p>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience 
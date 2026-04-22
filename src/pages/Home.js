import React from 'react';
import './Home.css';
import profileImg from './profile.jpg';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>Gudavalli Yeshwanth Ram</h1>
            <p className="tagline">Full Stack Developer | Learning Enthusiast</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a keen interest in building modern web applications. 
          I love learning new technologies and solving complex problems. Currently pursuing 
          my degree in Artificial Intelligence and actively working on various projects to enhance 
          my skills.
        </p>
      </section>

      <section className="research-interests">
        <h2>Research Interests</h2>
        <ul>
          <li>Web Development & User Experience</li>
          <li>Machine Learning & Artificial Intelligence</li>
          <li>Image Processing</li>
          <li>Mobile Application Development</li>
        </ul>
      </section>

      <section className="personal-details">
        <h2>Personal Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span className="detail-value">Gudavalli Yeshwanth Ram</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">+91 83416 56353</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Personal Email:</span>
            <span className="detail-value">yeshwanthramg@gmail.com</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">College Email:</span>
            <span className="detail-value">se23uari135@mahindrauniversity.edu.in</span>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>Mysql & MongoDB</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Jupyter Notebook</li>
              <li>Unity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

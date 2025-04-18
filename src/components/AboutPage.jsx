import React from 'react';
import doraemon from '../assets/Dora.jpg';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>자기소개</h1>
      <div className="profile-section">
        <img src={doraemon} alt="Doraemon" className="profile-image" />
        <div className="intro-text">
          <h2>이름</h2>
          <p>안녕하세요! 저는 React를 좋아하는 개발자입니다.</p>
          
          <h3>보유 기술</h3>
          <ul className="skills-list">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
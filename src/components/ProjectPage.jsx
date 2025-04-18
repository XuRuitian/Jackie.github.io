import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from './Calculator';

const ProjectPage = () => {
  return (
    <div className="projects-container">
      <h1>나의 프로젝트</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h2>나의 프로젝트1</h2>
          <div className="calculator-preview">
            <Link to="/calculator">
              <Calculator />
            </Link>
          </div>
          <p>React를 사용하여 만든 계산기 애플리케이션</p>
        </div>

        <div className="project-card">
          <h2>나의 프로젝트2</h2>
          <p>캡스톤 프로젝트에서의 딥러닝 기반 영상 분류 시스템</p>
        </div>

        <div className="project-card">
          <h2>나의 프로젝트3</h2>
          <button className="project-btn">프로젝트 보기</button>
          <p>나만의 맛집 저장리스트 ~~</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 
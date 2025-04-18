import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">React로 만든 포트폴리오</h1>
      <p className="student-id">2024123451 전연모</p>
      
      <div className="grid-container">
        <Link to="/about" className="grid-item">
          <div>
            <h2>소개</h2>
            <p>제 소개입니다.</p>
          </div>
        </Link>
        
        <Link to="/projects" className="grid-item">
          <div>
            <h2>프로젝트</h2>
            <p>제가 만든 프로젝트들 입니다.</p>
          </div>
        </Link>
        
        <Link to="/contact" className="grid-item">
          <div>
            <h2>연락처</h2>
            <p>저에게 연락하는 방법입니다.</p>
          </div>
        </Link>
        
        <div className="grid-item">
          <div>
            <h2>계산기</h2>
            <p>6주차 구현했던 계산기 기능을, 새로운 페이지에 추가해보세요</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 
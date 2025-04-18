import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">나만의 포트폴리오</Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          홈
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          소개
        </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
          프로젝트
        </Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          연락처
        </Link>
      </nav>
    </header>
  );
};

export default Header;
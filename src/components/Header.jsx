import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>GSaurine</h1>
          <span className="logo-subtitle">Desenvolvedor Full Stack</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('hero')} className="nav-link">Início</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projetos</button>
          <a 
            href="https://github.com/GSaurine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link github-btn"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Bem-vindo ao meu portfólio
        </h2>
        <p className="hero-subtitle">
          Desenvolvedor Full Stack com paixão por criar soluções web inovadoras e de alto desempenho
        </p>
        <div className="hero-buttons">
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn btn-primary"
          >
            Ver Meus Projetos
          </button>
          <a 
            href="https://github.com/GSaurine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Visitar GitHub
          </a>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>
    </section>
  );
}

export default Hero;

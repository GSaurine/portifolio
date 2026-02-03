import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/GSaurine');
        const data = await response.json();
        setAvatarUrl(data.avatar_url);
      } catch (error) {
        console.error('Erro ao buscar perfil do GitHub:', error);
      }
    };

    fetchGitHubProfile();
  }, []);

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
      {avatarUrl && (
        <div className="hero-profile">
          <img src={avatarUrl} alt="Perfil GSaurine" className="profile-image" />
        </div>
      )}
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>
    </section>
  );
}

export default Hero;

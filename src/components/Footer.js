import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>GSaurine</h4>
            <p>Desenvolvedor Full Stack focado em criar experiências web excepcionais.</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="https://github.com/GSaurine" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gabriel-saurine-37b950279/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:gabrielsaurineteixeira@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tecnologias</h4>
            <div className="tech-list">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">Docker</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} GSaurine. Todos os direitos reservados.</p>
          <p className="build-info">Desenvolvido com React ⚡</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

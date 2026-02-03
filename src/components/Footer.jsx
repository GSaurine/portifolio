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
                <a href="https://linkedin.com/in/GSaurine" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:seu-email@exemplo.com">
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

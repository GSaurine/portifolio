import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#b07219',
      'CSS': '#563d7c',
      'HTML': '#e34c26',
      'React': '#61dafb',
      'Vue': '#4FC08D',
      'Rust': '#ce422b',
    };
    return colors[language] || '#858585';
  };

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="card-header">
        <h3 className="card-title">{project.name}</h3>
        <span className="card-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 17L17 7M17 7H7m10 0V17" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </div>

      <p className="card-description">
        {project.description || 'Sem descrição disponível'}
      </p>

      <div className="card-footer">
        <div className="card-meta">
          {project.language && (
            <span className="language-tag">
              <span 
                className="language-dot"
                style={{ backgroundColor: getLanguageColor(project.language) }}
              ></span>
              {project.language}
            </span>
          )}
          <span className="updated-date">
            Atualizado em {formatDate(project.updated_at)}
          </span>
        </div>

        {(project.stargazers_count > 0 || project.forks_count > 0) && (
          <div className="card-stats">
            {project.stargazers_count > 0 && (
              <span className="stat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {project.stargazers_count}
              </span>
            )}
            {project.forks_count > 0 && (
              <span className="stat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2zM6 22a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM8 8a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z"/>
                </svg>
                {project.forks_count}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

export default ProjectCard;

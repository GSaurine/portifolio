import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/GSaurine/repos?sort=updated&per_page=12');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar projetos');
        }
        
        const data = await response.json();
        
        // Filtrar repositórios forks, ignorar repo com mesmo nome do usuário e ordenar por atualizações recentes
        const filteredProjects = data
          .filter(repo => !repo.fork && repo.name !== 'GSaurine')
          .slice(0, 12);
        
        setProjects(filteredProjects);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">
            Uma seleção dos meus projetos mais recentes desenvolvidos com paixão
          </p>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Carregando projetos...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>Não foi possível carregar os projetos: {error}</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="no-projects">
            <p>Nenhum projeto encontrado</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

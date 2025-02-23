import React, { useState } from 'react';
import './Projects.css';

const MyProjects = () => {
  const [showCurrentProjects, setShowCurrentProjects] = useState(true);

  const currentProjects = [
    { id: 1, name: 'Current Project A', description: 'Description of Current Project A' },
    { id: 2, name: 'Current Project B', description: 'Description of Current Project B' },
  ];

  const pastProjects = [
    { id: 1, name: 'Past Project A', description: 'Description of Past Project A' },
    { id: 2, name: 'Past Project B', description: 'Description of Past Project B' },
    { id: 3, name: 'Past Project C', description: 'Description of Past Project C' },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="toggle-buttons">
        <button
          className={showCurrentProjects ? 'active' : ''}
          onClick={() => setShowCurrentProjects(true)}
        >
          Current Projects
        </button>
        <button
          className={!showCurrentProjects ? 'active' : ''}
          onClick={() => setShowCurrentProjects(false)}
        >
          Past Projects
        </button>
      </div>
      <div className="projects-grid">
        {showCurrentProjects ? (
          currentProjects.map((project) => (
            <div key={project.id} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          pastProjects.map((project) => (
            <div key={project.id} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProjects;
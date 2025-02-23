import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import './Projects.css';

const MyProjects = () => {
  const [userInfo] = useOutletContext();
  const [showCurrentProjects, setShowCurrentProjects] = useState(true);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [pastProjects, setPastProjects] = useState([]);
  const navigate = useNavigate();

  // Fetching projects from backend
  async function getMyProjects() {
    const body = {
      userId: userInfo._id, // Send user ID in the request body
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/my_projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched projects:', data); // Log the fetched projects
        const current = data.filter((project) => project.active);
        const past = data.filter((project) => !project.active);
        setCurrentProjects(current);
        setPastProjects(past);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }

  useEffect(() => {
    if (userInfo._id) {
      getMyProjects();
    }
  }, [userInfo]);

  const handleProjectClick = (project) => {
    navigate(`/project/${project.project._id}`, { state: { project: project.project } });
  };

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
            <div
              key={project.project._id}
              className="project-item"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.project.name}</h3>
              <p>{project.project.category}</p>
            </div>
          ))
        ) : (
          pastProjects.map((project) => (
            <div
              key={project.project._id}
              className="project-item"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.project.name}</h3>
              <p>{project.project.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProjects;
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './Projects.css';

const MyProjects = () => {
  const [userInfo] = useOutletContext();
  const [showCurrentProjects, setShowCurrentProjects] = useState(true);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [pastProjects, setPastProjects] = useState([]);

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
            <Link key={project.project._id} to={`/project/${project.project._id}`} className="project-item">
              <h3>{project.project.name}</h3>
              <p>{project.project.category}</p>
            </Link>
          ))
        ) : (
          pastProjects.map((project) => (
            <Link key={project.project._id} to={`/project/${project.project._id}`} className="project-item">
              <h3>{project.project.name}</h3>
              <p>{project.project.category}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProjects;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Projects.css';

const BrowseProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Fetching projects from backend
  async function fetchProjects() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/all_projects`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched projects:', data); // Log the fetched projects
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const categories = ['All', 'Environmental', 'Wildlife', 'Annotation'];

  const filteredProjects = projects.filter((project) => {
    return (
      (selectedCategory === 'All' || project.category === selectedCategory) &&
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleProjectClick = (project) => {
    navigate(`/project/${project._id}`, { state: { project } });
  };

  return (
    <div className="projects">
      <h2>Browse Projects</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="project-item"
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.name}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProjects;
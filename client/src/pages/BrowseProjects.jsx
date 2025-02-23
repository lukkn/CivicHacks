import React, { useState } from 'react';
import './Projects.css';

const BrowseProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    { id: 1, name: 'Project A', description: 'Description of Project A', category: 'Science' },
    { id: 2, name: 'Project B', description: 'Description of Project B', category: 'Technology' },
    { id: 3, name: 'Project C', description: 'Description of Project C', category: 'Engineering' },
  ];

  const categories = ['All', 'Science', 'Technology', 'Engineering'];

  const filteredProjects = projects.filter((project) => {
    return (
      (selectedCategory === 'All' || project.category === selectedCategory) &&
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
          <div key={project.id} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProjects;
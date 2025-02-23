import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = [
    { id: 1, name: 'Project A', description: 'Description of Project A', category: 'Science' },
    { id: 2, name: 'Project B', description: 'Description of Project B', category: 'Technology' },
    { id: 3, name: 'Project C', description: 'Description of Project C', category: 'Engineering' },
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
    </div>
  );
};

export default ProjectDetails;
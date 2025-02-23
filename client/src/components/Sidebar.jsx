import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

const handleClickOutside = (event) => {
  if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    setIsOpen(false);
  }
};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
    <>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img src="logo.svg" alt="Logo" />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/my_projects">My Projects</Link></li>
          <li><Link to="/browse_projects">Browse Projects</Link></li>
          <li></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </>
  );
};

export default Sidebar;
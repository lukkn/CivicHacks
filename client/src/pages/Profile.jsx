import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [userInfo] = useOutletContext();
  const [MyProjects, setMyProjects] = useState([]);

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
        setMyProjects(data);
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
    <div className="profile">
      <div className="profile-header">
        <img src={userInfo.image} alt="Avatar" className="profile-avatar" />
        <h2>{userInfo.username}</h2>
        <p>{userInfo.email}</p>
      </div>
      <div className="profile-bio">
        <h3>Bio</h3>
        <p>{userInfo.bio}</p>
      </div>
      <div className="profile-projects">
        <h3>My Projects</h3>
        <div className="projects-list">
          {MyProjects && MyProjects.length > 0 ? (
            MyProjects.map((project) => (
              <Link key={project.project._id} to={`/project/${project.project._id}`} className="project-item">
                <h4>{project.project.name}</h4>
              </Link>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
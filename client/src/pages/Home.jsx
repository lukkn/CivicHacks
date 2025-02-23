import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [userInfo] = useOutletContext();

  return (
    <div className="dashboard">
      <h2>Welcome back, {userInfo.username}!</h2>
      <div className="dashboard-content">
        <div className="dashboard-item">
          <h1>Total projects</h1>
          <h2>3</h2>
        </div>
        <div className="dashboard-item">
          <h1>Current projects</h1>
          <h2>2</h2>
        </div>
        <div className="dashboard-item">
          <h1>Devices Checked Out</h1>
          <h2>2</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
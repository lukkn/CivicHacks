import React from "react";

const Home = () => {
  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome back, [User]!</p>
      <div className="dashboard-content">
        <div className="dashboard-item">
          <h2>Profile</h2>
          <p>View and edit your profile information.</p>
        </div>
        <div className="dashboard-item">
          <h2>Activities</h2>
          <p>Check out your recent activities and progress.</p>
        </div>
        <div className="dashboard-item">
          <h2>Settings</h2>
          <p>Manage your account settings and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
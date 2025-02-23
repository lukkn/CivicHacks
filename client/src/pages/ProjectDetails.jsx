import React from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project.description);
  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <h3>Category: {project.category}</h3>
        <h3>🌍 We Need Your Help!</h3>
        <p>We're on a mission to study how soil conditions impact air quality, and we need passionate volunteers to
            gather real-world data. If you love science, the environment, or just getting your hands a little dirty for
            a good cause, this is for you! This is your chance to directly contribute to real scientific research that
            can make a difference.</p>

        <h3>📋 What You’ll Do</h3>
        <ul>
            <li><strong>Get Your Hands on a ScienceMinions Sensor Kit</strong> – If you’ve completed two beginner-level
                research tasks, you qualify to rent one of our sensor kits from your local library or rental hub.</li>
            <li><strong>Travel to a Research Site</strong> – You’ll travel to one of our designated locations, either
                Central Park in New York City or the Redwood Forest in California, to collect crucial data.</li>
            <li><strong>Deploy the Sensor</strong> – Set up the device securely in the soil. The IoT-enabled sensor will
                automatically stream real-time data to the ScienceMinions platform.</li>
            <li><strong>Snap Some Photos</strong> – We need clear images of the sampling site, soil conditions, nearby
                vegetation, and any noticeable environmental factors (like industrial sites, traffic, or weather
                conditions).</li>
            <li><strong>Share Your Observations</strong> – Take note of anything interesting! Are there visible
                pollution sources? Unusual plant growth? Anything that stands out could be important.</li>
        </ul>

        <h3>💡 Why This Matters</h3>
        <p>We’re building a global dataset to understand how soil conditions interact with air pollutants like VOCs and
            CO2. Your work will help scientists identify trends, assess environmental risks, and push for smarter urban
            planning. Your effort could help shape policies for cleaner air and healthier soils!</p>

        <h3>🛠 What We Provide</h3>
        <ul>
            <li>ScienceMinions Sensor Kit (measures soil pH, moisture, temperature, VOC levels, and CO2 concentration)
            </li>
            <li>Digital Logging Interface (automatically streams data in real-time)</li>
            <li>Field Guide with expert tips on best data collection practices</li>
        </ul>

        <h3>✅ Requirements</h3>
        <ul>
            <li>Completed at least two prior research tasks</li>
            <li>Ability to travel to a research site</li>
            <li>Deploy the sensor for 2 days</li>
            <li>Upload photos and notes within 48 hours</li>
        </ul>

        <h3>🏆 Rewards</h3>
        <ul>
            <li>🎖 Earn ScienceMinions XP and badges</li>
            <li>📜 Receive a certificate of participation</li>
            <li>🌎 Contribute to real environmental science</li>
        </ul>

        <h3>Are You In?</h3>
        <p>Click below to claim this research request and reserve your sensor kit!</p>

        <a href="#" class="cta">🚀 Claim This Request</a>
    </div>
  );
};

export default ProjectDetails;
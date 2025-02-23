import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SensorDashboard from "./components/SensorDashboard";
import ResearchTaskPage from "./pages/ResearchTaskPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SensorDashboard />} />
                <Route path="/research-task" element={<ResearchTaskPage />} />
            </Routes>
        </Router>
    );
}

export default App;

// src/App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectsMain from './components/Projects/ProjectsMain';
import AssessmentMain from './components/Assessments/AssessmentMain';
import LearningPathMain from './components/Learning Path/LearningPathMain';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectsMain />} />
            <Route path="/assessments" element={<AssessmentMain />} />
            <Route path="/learning-path" element={<LearningPathMain />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

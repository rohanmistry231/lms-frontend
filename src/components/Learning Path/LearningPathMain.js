// src/components/LearningPath/LearningPathMain.js
import React, { useState } from 'react';
import CategoryMain from './Category/CategoryMain';
import TechnologyMain from './Technology/TechnologyMain';
import SubTechnologyMain from './SubTechnology/SubTechnologyMain';
import './LearningPathMain.css';

const LearningPathMain = () => {
  const [categories, setCategories] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [subTechnologies, setSubTechnologies] = useState([]);

  // Handle adding a new category
  const handleAddCategory = (category) => {
    setCategories([...categories, { id: Date.now(), ...category, technologies: [] }]);
  };

  // Handle adding a new technology
  const handleAddTechnology = (technology) => {
    setTechnologies([...technologies, { id: Date.now(), ...technology, subTechnologies: [] }]);
  };

  // Handle adding a new sub-technology
  const handleAddSubTechnology = (subTechnology) => {
    setSubTechnologies([...subTechnologies, { id: Date.now(), ...subTechnology }]);
  };

  return (
    <div className="learning-path-main">
      <div className="learning-path-section">
        <CategoryMain categories={categories} onAddCategory={handleAddCategory} />
      </div>
      <div className="learning-path-section">
        <TechnologyMain technologies={technologies} onAddTechnology={handleAddTechnology} />
      </div>
      <div className="learning-path-section">
        <SubTechnologyMain subTechnologies={subTechnologies} onAddSubTechnology={handleAddSubTechnology} />
      </div>
    </div>
  );
};

export default LearningPathMain;

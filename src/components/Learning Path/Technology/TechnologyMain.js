import React, { useState, useEffect } from 'react';
import TechnologyList from './TechnologyList';
import TechnologyForm from './TechnologyForm';
import './TechnologyMain.css';
import axios from 'axios';

const API_URL = 'http://192.168.10.8:5000/api/learning-path/technologies';

const TechnologyMain = () => {
  const [technologies, setTechnologies] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get(API_URL);
        setTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddTechnology = async (technology) => {
    try {
      const response = await axios.post(API_URL, technology);
      setTechnologies([...technologies, response.data]);
      setFormVisible(false);
    } catch (error) {
      console.error('Error adding technology:', error);
    }
  };

  return (
    <div className="technology-main">
      <button className="add-button" onClick={() => setFormVisible(!isFormVisible)}>
        Add Technology
      </button>
      {isFormVisible && <TechnologyForm onAddTechnology={handleAddTechnology} />}
      <TechnologyList technologies={technologies} setTechnologies={setTechnologies} />
    </div>
  );
};

export default TechnologyMain;

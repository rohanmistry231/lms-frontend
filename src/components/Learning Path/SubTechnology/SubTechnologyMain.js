import React, { useState, useEffect } from 'react';
import SubTechnologyList from './SubTechnologyList';
import SubTechnologyForm from './SubTechnologyForm';
import './SubTechnologyMain.css';
import axios from 'axios';

const API_URL = 'http://192.168.10.8:5000/api/learning-path/sub-technologies';

const SubTechnologyMain = () => {
  const [subTechnologies, setSubTechnologies] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchSubTechnologies = async () => {
      try {
        const response = await axios.get(API_URL);
        setSubTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching sub-technologies:', error);
      }
    };

    fetchSubTechnologies();
  }, []);

  const handleAddSubTechnology = async (subTechnology) => {
    try {
      const response = await axios.post(API_URL, subTechnology);
      setSubTechnologies([...subTechnologies, response.data]);
      setFormVisible(false);
    } catch (error) {
      console.error('Error adding sub-technology:', error);
    }
  };

  return (
    <div className="subtechnology-main">
      <button className="add-button" onClick={() => setFormVisible(!isFormVisible)}>
        Add SubTechnology
      </button>
      {isFormVisible && <SubTechnologyForm onAddSubTechnology={handleAddSubTechnology} />}
      <SubTechnologyList subTechnologies={subTechnologies} setSubTechnologies={setSubTechnologies} />
    </div>
  );
};

export default SubTechnologyMain;

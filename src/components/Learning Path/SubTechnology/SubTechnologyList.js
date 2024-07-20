import React from 'react';
import { Button } from 'react-bootstrap';
import './SubTechnologyList.css'; // Make sure the CSS file is correctly imported

const SubTechnologyList = ({ subTechnologies, onDeleteSubTechnology }) => {
  return (
    <div className="subtechnology-list-container">
      <h3>Sub-Technologies</h3>
      <ul className="subtechnology-list">
        {subTechnologies.map(subTechnology => (
          <li key={subTechnology._id} className="subtechnology-list-item">
            {subTechnology.name}
            <Button
              variant="danger"
              onClick={() => onDeleteSubTechnology(subTechnology._id)}
              className="delete-button"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubTechnologyList;

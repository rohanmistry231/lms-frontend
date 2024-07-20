import React from 'react';
import { Button } from 'react-bootstrap';
import './TechnologyList.css'; // Make sure the CSS file is correctly imported

const TechnologyList = ({ technologies, onDeleteTechnology }) => {
  return (
    <div className="technology-list-container">
      <h3>Technologies</h3>
      <ul className="technology-list">
        {technologies.map(technology => (
          <li key={technology._id} className="technology-list-item">
            {technology.name}
            <Button
              variant="danger"
              onClick={() => onDeleteTechnology(technology._id)}
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

export default TechnologyList;

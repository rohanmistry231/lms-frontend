import React from 'react';
import { Button } from 'react-bootstrap';
import './CategoryList.css'; // Make sure the CSS file is correctly imported

const CategoryList = ({ categories, onDeleteCategory }) => {
  return (
    <div className="category-list-container">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category._id} className="category-list-item">
            {category.name}
            <Button
              variant="danger"
              onClick={() => onDeleteCategory(category._id)}
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

export default CategoryList;

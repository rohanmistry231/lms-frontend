// src/components/LearningPath/Technology/TechnologyForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './TechnologyForm.css'; // Make sure the CSS file is correctly imported

const TECHNOLOGY_API_URL = 'http:/192.168.10.8:5000/api/learning-path/technologies';
const CATEGORY_API_URL = 'http://192.168.10.8:5000/api/learning-path/categories';

const TechnologyForm = ({ onAddTechnology, onHideForm }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await axios.get(CATEGORY_API_URL);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(TECHNOLOGY_API_URL, {
        name,
        description,
        category: selectedCategory,
      });
      onAddTechnology(response.data); // Notify parent component
      setName('');
      setDescription('');
      setSelectedCategory('');
      onHideForm(); // Hide the form
    } catch (error) {
      console.error('Error adding technology:', error);
    }
  };

  return (
    <div className="technology-form-container">
      <h3>Add New Technology</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTechnologyName">
          <Form.Label>Technology Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter technology name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTechnologyDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter technology description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTechnologyCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Technology
        </Button>
      </Form>
    </div>
  );
};

export default TechnologyForm;

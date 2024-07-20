// src/components/LearningPath/SubTechnology/SubTechnologyForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './SubTechnologyForm.css';  // Ensure correct import for CSS

const SubTechnologyForm = ({ onAddSubTechnology }) => {
  const [subTechnologyName, setSubTechnologyName] = useState('');
  const [description, setDescription] = useState('');
  const [technology, setTechnology] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch technologies from the backend to populate the technology dropdown
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get('http://192.168.10.8:5000/api/learning-path/technologies');
        setTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subTechnologyName.trim() || !description.trim() || !technology.trim()) {
      setError('All fields are required');
      return;
    }
    try {
      await onAddSubTechnology({ name: subTechnologyName, description, technology });
      setSubTechnologyName('');
      setDescription('');
      setTechnology('');
      setError('');
    } catch (err) {
      setError('Failed to add sub-technology');
      console.error(err);
    }
  };

  return (
    <Form className="sub-technology-form" onSubmit={handleSubmit}>
      <h2>Add New Sub-Technology</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="subTechnologyName">
        <Form.Label>Sub-Technology Name:</Form.Label>
        <Form.Control
          type="text"
          value={subTechnologyName}
          onChange={(e) => setSubTechnologyName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="technology">
        <Form.Label>Select Technology:</Form.Label>
        <Form.Control
          as="select"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        >
          <option value="">Select a technology</option>
          {technologies.map((tech) => (
            <option key={tech._id} value={tech._id}>
              {tech.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        Add
      </Button>
    </Form>
  );
};

export default SubTechnologyForm;

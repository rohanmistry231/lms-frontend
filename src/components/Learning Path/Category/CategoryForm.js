// src/components/LearningPath/Category/CategoryForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './CategoryForm.css';

const CategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim() || !description.trim()) {
      setError('All fields are required');
      return;
    }
    onAddCategory({ name: categoryName, description });
    setCategoryName('');
    setDescription('');
    setError('');
  };

  return (
    <Form className="category-form" onSubmit={handleSubmit}>
      <h2>Add New Category</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="categoryName">
        <Form.Label>Category Name:</Form.Label>
        <Form.Control
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
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
      <Button type="submit" variant="primary" className="mt-3">
        Add
      </Button>
    </Form>
  );
};

export default CategoryForm;

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ProjectForm = ({ onAddProject }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = {
      title: formData.get('title'),
      description: formData.get('description'),
    };

    try {
      const response = await axios.post('http://192.168.10.8:5000/api/projects', projectData);
      onAddProject(response.data);
      event.target.reset(); // Clear the form fields
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Project Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter project title" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" as="textarea" rows={3} placeholder="Enter project description" required />
      </Form.Group>
      <Button variant="primary" type="submit">Add Project</Button>
    </Form>
  );
};

export default ProjectForm;

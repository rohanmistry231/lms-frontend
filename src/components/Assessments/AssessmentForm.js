import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const AssessmentForm = ({ onAddAssessment, assessment }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (assessment) {
      setName(assessment.name);
      setDescription(assessment.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [assessment]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const assessmentData = { name, description };

    const request = assessment
      ? axios.put(`http://192.168.10.8:5000/api/assessments/${assessment._id}`, assessmentData)
      : axios.post('http://192.168.10.8:5000/api/assessments', assessmentData);

    request
      .then(response => {
        onAddAssessment(response.data);
        setShowSuccess(true);
        if (!assessment) {
          setName('');
          setDescription('');
        }
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch(error => {
        console.error('Error submitting assessment:', error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Assessment Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter assessment name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            placeholder="Enter assessment description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {assessment ? 'Update' : 'Add'} Assessment
        </Button>
      </Form>
      {showSuccess && (
        <Alert variant="success" className="mt-3 fade-out">
          Assessment {assessment ? 'updated' : 'added'} successfully!
        </Alert>
      )}
    </div>
  );
};

export default AssessmentForm;

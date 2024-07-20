import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AssessmentList from './AssessmentList';
import AssessmentForm from './AssessmentForm';

const AssessmentMain = () => {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    // Fetch assessments from the backend API
    axios.get('http://192.168.10.8:5000/api/assessments')
      .then(response => {
        setAssessments(response.data);
      })
      .catch(error => {
        console.error('Error fetching assessments:', error);
      });
  }, []);

  const handleAddAssessment = (newAssessment) => {
    axios.post('http://192.168.10.8:5000/api/assessments', newAssessment)
      .then(response => {
        setAssessments(prevAssessments => [...prevAssessments, response.data]);
      })
      .catch(error => {
        console.error('Error adding assessment:', error);
      });
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Assessments</h2>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <Card.Title>Assessment List</Card.Title>
            </Card.Header>
            <Card.Body>
              <AssessmentList assessments={assessments} setAssessments={setAssessments} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Add New Assessment</Card.Title>
            </Card.Header>
            <Card.Body>
              <AssessmentForm onAddAssessment={handleAddAssessment} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="secondary" as={Link} to="/">Go Back</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AssessmentMain;

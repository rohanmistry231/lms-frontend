import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AssessmentList = ({ assessments, setAssessments }) => {
  // Function to delete an assessment
  const deleteAssessment = (assessmentId) => {
    axios.delete(`http://192.168.10.8:5000/api/assessments/${assessmentId}`)
      .then(response => {
        setAssessments(assessments.filter(assessment => assessment._id !== assessmentId));
        console.log('Assessment deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting assessment:', error);
      });
  };

  return (
    <ListGroup variant="flush">
      {assessments.map(assessment => (
        <ListGroup.Item key={assessment._id}>
          <Row>
            <Col xs={10}>
              <Link to={`/assessments/${assessment._id}`}>{assessment.name}</Link>
            </Col>
            <Col xs={2} className="text-right">
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteAssessment(assessment._id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default AssessmentList;

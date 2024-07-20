// src/components/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Assuming you have Bootstrap installed
import './Dashboard.css'; // Import custom CSS for dashboard styling

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">AI Learning Hub Dashboard</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Courses</Card.Title>
              <Card.Text>
                Explore courses in Programming, Data Science, AI/ML, and more.
              </Card.Text>
              <Link to="/courses">
                <Button variant="primary">View Courses</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Showcase your AI projects and collaborate with others.
              </Card.Text>
              <Link to="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Assessments</Card.Title>
              <Card.Text>
                Take assessments and quizzes to test your AI knowledge.
              </Card.Text>
              <Link to="/assessments">
                <Button variant="primary">Take Assessments</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Learning Progress</Card.Title>
              <Card.Text>
                Track your learning progress over time.
              </Card.Text>
              <Link to="/progress">
                <Button variant="primary">Check My Score</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

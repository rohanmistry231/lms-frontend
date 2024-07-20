import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

const ProjectMain = () => {
  const [addedProject, setAddedProject] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddProject = (newProject) => {
    setAddedProject(newProject);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Projects</h2>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <Card.Title>Project List</Card.Title>
            </Card.Header>
            <Card.Body>
              <ProjectList addedProject={addedProject} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Add New Project</Card.Title>
            </Card.Header>
            <Card.Body>
              <ProjectForm onAddProject={handleAddProject} />
              {showSuccess && <Alert variant="success" className="mt-3">Project added successfully!</Alert>}
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

export default ProjectMain;

import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProjectList = ({ addedProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (addedProject) {
      setProjects((prevProjects) => [...prevProjects, addedProject]);
    }
  }, [addedProject]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://192.168.10.8:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`http://192.168.10.8:5000/api/projects/${projectId}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <ListGroup variant="flush">
      {projects.map((project) => (
        <ListGroup.Item key={project._id}>
          <Link to={`/projects/${project._id}`}>{project.title}</Link>
          <Button variant="danger" size="sm" className="ms-2" onClick={() => deleteProject(project._id)}>Delete</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ProjectList;

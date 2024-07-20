// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap components
import './Footer.css'; // Custom CSS for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">AI Learning Hub</h5>
            <p>Explore and enhance your knowledge in AI, Data Science, and more.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/assessments">Assessments</a></li>
              <li><a href="/learning-path">Learning Path</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: rohanmistry231@gmail.com</p>
            <p>Phone: +91 8980067632</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-bottom-text">&copy; {new Date().getFullYear()} AI Learning Hub. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

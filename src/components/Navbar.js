// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom CSS for Navbar
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'; // React Bootstrap components

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      className="navbar"
      expanded={expanded}
    >
      <Container>
        <Link className="navbar-brand" to="/">AI Learning Hub</Link>
        <BootstrapNavbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" exact>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/assessments">Assessments</Nav.Link>
            <Nav.Link as={Link} to="/learning-path">Learning Path</Nav.Link>
          </Nav>
          <form className="d-flex ms-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

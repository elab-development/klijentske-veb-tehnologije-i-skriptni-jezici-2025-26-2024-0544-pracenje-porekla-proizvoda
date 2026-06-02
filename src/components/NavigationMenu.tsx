// src/components/NavigationMenu.tsx
import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import whiskeyImage from '../images/whiskey.png';

const NavigationMenu: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <Image src={whiskeyImage} alt="Whiskey glass" width={32} height={32} rounded />
          <span className="nav-brand-oldlatin">ČISTA KAP</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Početna</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
            <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
            <Nav.Link as={Link} to="/pregled">Pregled</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
// src/components/NavigationMenu.tsx
import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import whiskeyImage from '../images/whiskey.png';

const NavigationMenu: React.FC = () => {
  return (
    <Navbar className="app-navbar mx-3 my-2" bg="dark" variant="dark" expand="lg">
      <Container fluid className="px-0">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 ms-0 navbar-brand-custom">
          <span className="nav-brand-oldlatin">ČISTA KAP</span>
          <Image src={whiskeyImage} alt="Whiskey glass" width={32} height={32} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Početna</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Registracija</Nav.Link>
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
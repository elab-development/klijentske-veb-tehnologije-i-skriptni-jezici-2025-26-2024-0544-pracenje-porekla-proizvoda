// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="footer-company">
              <strong>ČISTA KAP d.o.o.</strong>
              <div>Adresa: Svetog Save 10, 11000 Beograd</div>
              <div>Telefon: +381 11 123 456</div>
            </div>
          </Col>
          <Col md={6} className="text-md-end mt-2 mt-md-0">
            <div className="footer-links">
              <a href="#" aria-label="Facebook link" title="Facebook">f</a>
              <a href="#" aria-label="Instagram link" className="ms-3" title="Instagram">📷</a>
              <a href="#" aria-label="Twitter link" className="ms-3" title="Twitter">𝕏</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

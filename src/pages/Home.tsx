// src/pages/Home.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div className="page-background page-home">
      <Container className="mt-4">
        <Row>
          <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Dobrodošli na sajt</Card.Title>
              <Card.Text>
                Ovo je početna stranica. Koristite meni za navigaciju.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

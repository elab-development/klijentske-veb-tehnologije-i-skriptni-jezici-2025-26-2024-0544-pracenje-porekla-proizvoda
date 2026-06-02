import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user');
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 800);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="page-background page-logout">
      <Container className="mt-4">
        <Alert variant="info">Uspešno ste se odjavili. Preusmeravanje na login...</Alert>
      </Container>
    </div>
  );
};

export default Logout;

// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CustomField from '../components/CustomField';
import CustomButton from '../components/CustomButton';
import { ValidationService } from '../services/ValidationService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const validator = new ValidationService();

  const validateForm = (): boolean => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!validator.validateRequired(email)) {
      newErrors.email = 'Email je obavezan';
      isValid = false;
    } else if (!validator.validateEmail(email)) {
      newErrors.email = 'Neispravan format email-a';
      isValid = false;
    }

    if (!validator.validateRequired(password)) {
      newErrors.password = 'Lozinka je obavezna';
      isValid = false;
    } else if (!validator.validateMinLength(password, 4)) {
      newErrors.password = 'Lozinka mora imati bar 4 karaktera';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Simulacija uspešnog logina
      localStorage.setItem('user', JSON.stringify({ email }));
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/pregled');
      }, 1500);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Prijava</h2>
          {showSuccess && <Alert variant="success">Uspešno ste prijavljeni! Preusmeravanje...</Alert>}
          <CustomField
            label="Email adresa"
            type="email"
            placeholder="unesite@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />
          <CustomField
            label="Lozinka"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />
          <CustomButton variant="primary" onClick={handleLogin}>
            Prijavi se
          </CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

// src/pages/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CustomField from '../components/CustomField';
import CustomButton from '../components/CustomButton';
import { ValidationService } from '../services/ValidationService';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const validator = new ValidationService();

  const validateForm = (): boolean => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!validator.validateRequired(name)) {
      newErrors.name = 'Ime je obavezno';
      isValid = false;
    }

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

    if (!validator.validateRequired(confirmPassword)) {
      newErrors.confirmPassword = 'Potvrda lozinke je obavezna';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Lozinke se ne poklapaju';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (validateForm()) {
      // Simulacija uspešne registracije
      // U realnoj aplikaciji bi se slali podaci na server
      localStorage.setItem('user', JSON.stringify({ email, name }));
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/pregled');
      }, 1500);
    }
  };

  return (
    <div className="page-background page-register">
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Registracija</h2>
            {showSuccess && <Alert variant="success">Uspešno ste se registrovali! Preusmeravanje...</Alert>}
            <CustomField
              label="Ime"
              type="text"
              placeholder="Unesite vaše ime"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              required
            />
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
            <CustomField
              label="Potvrdi lozinku"
              type="password"
              placeholder="******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              required
            />
            <CustomButton variant="primary" onClick={handleRegister}>
              Registruj se
            </CustomButton>
            <p className="text-center mt-3">
              Već imaš nalog? <a href="/login">Prijavi se</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;

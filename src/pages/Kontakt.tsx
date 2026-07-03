// src/pages/Kontakt.tsx
import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CustomField from '../components/CustomField';
import CustomButton from '../components/CustomButton';
import { ValidationService } from '../services/ValidationService';

const Kontakt: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const validator = new ValidationService();

  const validateForm = (): boolean => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!validator.validateRequired(name)) {
      newErrors.name = 'Ime je obavezno';
      isValid = false;
    }
    if (!validator.validateRequired(email)) {
      newErrors.email = 'Email je obavezan';
      isValid = false;
    } else if (!validator.validateEmail(email)) {
      newErrors.email = 'Neispravan email';
      isValid = false;
    }
    if (!validator.validateRequired(message)) {
      newErrors.message = 'Poruka je obavezna';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log({ name, email, message });
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="page-background page-kontakt">
      <Container className="mt-4">
        <Row>
          <Col md={8} className="mx-auto">
          <h2>Kontakt forma</h2>
          {sent && <Alert variant="success">Poruka je poslata!</Alert>}
          <CustomField
            label="Ime i prezime"
            type="text"
            placeholder="Vaše ime"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            required
          />
          <CustomField
            label="Email"
            type="email"
            placeholder="vas@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />
          <CustomField
            label="Poruka"
            as="textarea"
            rows={4}
            placeholder="Vaša poruka"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={errors.message}
            required
          />
          <CustomButton variant="success" onClick={handleSubmit}>
            Pošalji poruku
          </CustomButton>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kontakt;

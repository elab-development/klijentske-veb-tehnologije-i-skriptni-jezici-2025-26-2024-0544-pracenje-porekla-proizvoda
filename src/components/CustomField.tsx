// src/components/CustomField.tsx
import React from 'react';
import { Form } from 'react-bootstrap';

interface CustomFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

const CustomField: React.FC<CustomFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  required = false
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label} {required && <span className="text-danger">*</span>}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomField;

// src/components/CustomField.tsx
import React from 'react';
import { Form } from 'react-bootstrap';

interface CustomFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  as?: React.ElementType;
  rows?: number;
}

const CustomField: React.FC<CustomFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  as = 'input',
  rows = 3
}) => {
  const handleInput = (e: React.FormEvent<any>) => {
    if (as === 'textarea') {
      const target = e.currentTarget as HTMLTextAreaElement;
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label} {required && <span className="text-danger">*</span>}</Form.Label>
      <Form.Control
        as={as}
        type={as === 'textarea' ? undefined : type}
        rows={as === 'textarea' ? rows : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={handleInput}
        isInvalid={!!error}
        style={as === 'textarea' ? { overflow: 'hidden', resize: 'none' } : undefined}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomField;

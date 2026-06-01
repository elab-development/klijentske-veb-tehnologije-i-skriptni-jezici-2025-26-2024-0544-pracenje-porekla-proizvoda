// src/components/CustomButton.tsx
import React from 'react';
import { Button } from 'react-bootstrap';

interface CustomButtonProps {
  variant?: 'primary' | 'success' | 'danger' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  disabled = false
}) => {
  return (
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CustomButton;

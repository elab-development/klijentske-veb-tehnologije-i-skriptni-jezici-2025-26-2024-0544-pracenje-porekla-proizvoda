// src/services/ValidationService.ts
import { IValidation } from '../interfaces/IValidation';

export class ValidationService implements IValidation {
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  validateRequired(value: string): boolean {
    return value.trim().length > 0;
  }

  validateMinLength(value: string, min: number): boolean {
    return value.length >= min;
  }
}

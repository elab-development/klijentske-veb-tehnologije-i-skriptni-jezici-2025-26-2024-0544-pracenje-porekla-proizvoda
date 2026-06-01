// src/interfaces/IValidation.ts
export interface IValidation {
  validateEmail(email: string): boolean;
  validateRequired(value: string): boolean;
  validateMinLength(value: string, min: number): boolean;
}

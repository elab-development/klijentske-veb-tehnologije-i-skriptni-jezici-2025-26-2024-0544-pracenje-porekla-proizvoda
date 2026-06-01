// src/interfaces/IUser.ts
import { IProduct } from './IProduct';

export interface IUser {
  id: number;
  email: string;
  name: string;
  products?: IProduct[];
}

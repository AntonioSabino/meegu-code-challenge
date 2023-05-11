import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  birthdate: Date;
  document: string;
  acceptedTermsAndConditions: boolean;
  zipcode: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}

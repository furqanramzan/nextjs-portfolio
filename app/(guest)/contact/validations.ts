import { object, string } from 'zod';

export const createContactSchema = object({
  name: string().min(1).max(256).trim(),
  email: string().min(1).max(256).trim(),
  message: string().min(1).trim(),
});

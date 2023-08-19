import type { z } from 'zod';
import { object, string } from 'zod';

export const loginSchema = object({
  email: string().email().min(1).max(256).trim(),
  password: string().max(256).trim(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

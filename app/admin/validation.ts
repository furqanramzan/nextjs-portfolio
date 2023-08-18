import type { z } from 'zod';
import { coerce, object, string } from 'zod';

export const upsertAdminSchema = object({
  id: coerce.number().optional(),
  name: string().min(1).max(256).trim(),
  email: string().email().min(1).max(256).trim(),
  password: string().max(256).trim().optional(),
});

export type UpsertAdminSchema = z.infer<typeof upsertAdminSchema>;

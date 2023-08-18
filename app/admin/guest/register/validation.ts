import { z } from 'zod';

export const upsertAdminSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1).max(256).trim(),
  email: z.string().min(1).max(256).trim(),
  password: z.string().max(256).trim().optional(),
});

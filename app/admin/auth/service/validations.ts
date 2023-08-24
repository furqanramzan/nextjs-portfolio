import { coerce, object, string } from 'zod';

export const upsertServiceSchema = object({
  id: coerce.number().optional(),
  title: string().min(1).max(256).trim(),
  description: string().min(1).max(256).trim(),
  icon: string().min(1).trim(),
});

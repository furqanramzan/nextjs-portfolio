import { coerce, object, string } from 'zod';

export const upsertEducationSchema = object({
  id: coerce.number().optional(),
  title: string().min(1).max(256).trim(),
  institute: string().min(1).max(256).trim(),
  year: string().min(1).max(256).trim(),
});

import { coerce, object, string } from 'zod';

export const upsertWorkSkillSchema = object({
  id: coerce.number().optional(),
  title: string().min(1).max(256).trim(),
});

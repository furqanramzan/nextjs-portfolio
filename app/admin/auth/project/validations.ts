import { coerce, object, string } from 'zod';
import { fileValidation } from '@/utils/validate';

export const upsertProjectSchema = object({
  id: coerce.number().optional(),
  title: string().min(1).max(256).trim(),
  category: string().min(1).max(256).trim(),
  image: fileValidation(1),
});

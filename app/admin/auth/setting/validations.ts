import { coerce, object, string } from 'zod';

export const updateSettingSchema = object({
  id: coerce.number(),
  content: string().min(1).trim(),
});

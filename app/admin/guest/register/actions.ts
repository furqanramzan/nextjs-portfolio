'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { upsertAdminSchema as schema } from './validation';
import { validate } from '@/app/utils/validate';

const upsertAdminSchema = schema.extend({
  email: z.string().email(),
});

export async function upsertAdmin(inputs: z.infer<typeof upsertAdminSchema>) {
  const parse = validate(inputs, upsertAdminSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }

  redirect('/');
}

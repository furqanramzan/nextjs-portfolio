'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { upsertAdminSchema as schema } from './validation';

const upsertAdminSchema = schema.extend({
  email: z.string().email(),
});
type Errors<T> = {
  [K in keyof T]?: string[];
};

export async function upsertAdmin(inputs: z.infer<typeof upsertAdminSchema>) {
  const parse = upsertAdminSchema.safeParse(inputs);
  if (!parse.success) {
    const errors = parse.error.flatten().fieldErrors as Errors<
      z.infer<typeof schema>
    >;
    return { errors };
  }
  redirect('/');
}

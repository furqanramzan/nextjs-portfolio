'use server';

import { createContactSchema } from './validations';
import { getRepository } from '@/utils/repository';
import { validate } from '@/utils/validate.server';

const repository = getRepository('message');

export async function create(params: FormData) {
  const parse = await validate(params, createContactSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }
  const inputs = parse.data;

  await repository.create(inputs);

  return {
    message:
      "Thanks for reaching out! We've got your message and will be in touch soon.",
  };
}

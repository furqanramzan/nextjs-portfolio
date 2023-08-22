'use server';

import { redirect } from 'next/navigation';
import { getRepository } from '@/repositories';
import {
  type UpsertServiceSchema,
  upsertServiceSchema,
} from '@/app/admin/auth/service/validations';
import {
  type GetItems,
  formatListParams,
  formatListResponse,
} from '@/utils/get-many';
import { throwIfNotFound } from '@/utils/errors';
import { validate } from '@/utils/validate';

export async function getItems(params?: GetItems) {
  const items = await getRepository('service').getMany(
    formatListParams(params),
  );
  return formatListResponse(items);
}

export async function upsertService(inputs: UpsertServiceSchema) {
  const parse = await validate(inputs, upsertServiceSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }

  const repository = getRepository('service');

  if (inputs.id) {
    const { id, ...values } = inputs;
    const result = await repository.update(values, id);
    throwIfNotFound(result);
  } else {
    await repository.create(inputs);
  }

  redirect('/admin/auth/service');
}

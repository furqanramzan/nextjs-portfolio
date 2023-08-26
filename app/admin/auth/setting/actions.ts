'use server';

import { redirect } from 'next/navigation';
import { settings } from './dummy';
import { updateSettingSchema } from './validations';
import { getRepository } from '@/utils/repository';
import {
  type GetItems,
  formatListParams,
  formatListResponse,
} from '@/utils/get-many';
import { throwIfNotFound } from '@/utils/errors';
import { validate } from '@/utils/validate.server';

const repository = getRepository('setting');

export async function get(params?: GetItems) {
  const items = await repository.getMany(formatListParams(params));
  return formatListResponse(items);
}

export async function update(params: FormData) {
  const parse = await validate(params, updateSettingSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }
  const inputs = parse.data;

  const result = await repository.update(inputs, inputs.id);
  throwIfNotFound(result);

  redirect('/admin/auth/setting');
}

export async function dummy() {
  await settings();
}

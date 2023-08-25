'use server';

import { redirect } from 'next/navigation';
import { softSkills } from './dummy';
import { upsertSoftSkillSchema } from './validations';
import { getRepository } from '@/utils/repository';
import {
  type GetItems,
  formatListParams,
  formatListResponse,
} from '@/utils/get-many';
import { throwIfNotFound } from '@/utils/errors';
import { validate } from '@/utils/validate.server';

const repository = getRepository('softSkill');

export async function get(params?: GetItems) {
  const items = await repository.getMany(formatListParams(params));
  return formatListResponse(items);
}

export async function upsert(params: FormData) {
  const parse = await validate(params, upsertSoftSkillSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }
  const inputs = parse.data;

  if (inputs.id) {
    const result = await repository.update(inputs, inputs.id);
    throwIfNotFound(result);
  } else {
    await repository.create(inputs);
  }

  redirect('/admin/auth/soft-skill');
}

export async function destroy(id: number) {
  return throwIfNotFound(await repository.destroy(id));
}

export async function dummy() {
  await softSkills();
}

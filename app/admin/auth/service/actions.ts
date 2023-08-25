'use server';

import { redirect } from 'next/navigation';
import { services } from './dummy';
import { upsertServiceSchema as schema } from './validations';
import { getRepository } from '@/utils/repository';
import {
  type GetItems,
  formatListParams,
  formatListResponse,
} from '@/utils/get-many';
import { throwIfNotFound } from '@/utils/errors';
import { fileValidation, validate } from '@/utils/validate.server';
import { deleteFile, uploadFile } from '@/utils/filesystem';

const repository = getRepository('service');

export async function get(params?: GetItems) {
  const items = await repository.getMany(formatListParams(params));
  return formatListResponse(items);
}

const upsertServiceSchema = schema.extend({
  icon: fileValidation(1),
});
export async function upsert(params: FormData) {
  const parse = await validate(params, upsertServiceSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }
  const inputs = parse.data;

  const { id, icon, ...values } = inputs;
  const data: Parameters<typeof repository.create>[0] = values;
  if (icon) {
    data.icon = await uploadFile(icon, 'one');
  }

  if (id) {
    if (icon) {
      await deleteIcon(id);
    }
    const result = await repository.update(data, id);
    throwIfNotFound(result);
  } else {
    await repository.create(data);
  }

  redirect('/admin/auth/service');
}

export async function destroy(id: number) {
  await deleteIcon(id);
  return throwIfNotFound(await repository.destroy(id));
}

export async function dummy() {
  await services();
}

async function deleteIcon(id: number) {
  const { icon: iconKey } = throwIfNotFound(await repository.getOne(id));
  await deleteFile(iconKey);
}

'use server';

import { redirect } from 'next/navigation';
import { projects } from './dummy';
import { upsertProjectSchema as schema } from './validations';
import { getRepository } from '@/utils/repository';
import {
  type GetItems,
  formatListParams,
  formatListResponse,
} from '@/utils/get-many';
import { throwIfNotFound } from '@/utils/errors';
import { fileValidation, validate } from '@/utils/validate.server';
import { deleteFile, uploadFile } from '@/utils/filesystem';

const repository = getRepository('project');

export async function get(params?: GetItems) {
  const items = await repository.getMany(formatListParams(params));
  return formatListResponse(items);
}

const upsertProjectSchema = schema.extend({
  image: fileValidation(1),
});
export async function upsert(params: FormData) {
  const parse = await validate(params, upsertProjectSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }
  const inputs = parse.data;

  const { id, image, ...values } = inputs;
  const data: Parameters<typeof repository.create>[0] = values;
  if (image) {
    data.image = await uploadFile(image, 'one');
  }

  if (id) {
    if (image) {
      await deleteImage(id);
    }
    const result = await repository.update(data, id);
    throwIfNotFound(result);
  } else {
    await repository.create(data);
  }

  redirect('/admin/auth/project');
}

export async function destroy(id: number) {
  await deleteImage(id);
  return throwIfNotFound(await repository.destroy(id));
}

export async function dummy() {
  await projects();
}

async function deleteImage(id: number) {
  const { image: imageKey } = throwIfNotFound(await repository.getOne(id));
  await deleteFile(imageKey);
}

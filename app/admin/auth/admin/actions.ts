'use server';

import { redirect } from 'next/navigation';
import { getRepository } from '@/repositories';
import type { UpsertAdminSchema } from '@/app/admin/validation';
import { upsertAdmin as upsertAdminHandler } from '@/app/admin/upsert-admin';
import {
  type GetItems,
  formatListParams,
  formatListResponse,
} from '@/utils/get-many';
import { throwIfNotFound } from '@/utils/errors';

const repository = getRepository('admin');

export async function get(params?: GetItems) {
  const items = await repository.getMany(formatListParams(params));
  return formatListResponse(items);
}

export async function upsert(inputs: UpsertAdminSchema) {
  const result = await upsertAdminHandler(inputs);

  if (result.data) {
    redirect('/admin/auth/admin');
  } else {
    return result;
  }
}

export async function destroy(id: number) {
  return throwIfNotFound(await repository.destroy(id));
}

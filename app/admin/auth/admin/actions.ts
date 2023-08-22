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

export async function getItems(params?: GetItems) {
  const items = await getRepository('admin').getMany(formatListParams(params));
  return formatListResponse(items);
}

export async function upsertAdmin(inputs: UpsertAdminSchema) {
  const result = await upsertAdminHandler(inputs);

  if (result.data) {
    redirect('/admin/auth/admin');
  } else {
    return result;
  }
}

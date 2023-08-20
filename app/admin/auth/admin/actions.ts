'use server';

import { redirect } from 'next/navigation';
import { getRepository } from '@/repositories';
import type { UpsertAdminSchema } from '@/app/admin/validation';
import { upsertAdmin as upsertAdminHandler } from '@/app/admin/upsert-admin';

interface GetItems {
  page?: number;
}

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

const limit = 20;

interface Params<TData> {
  items: TData;
  total?: number;
}
function formatListResponse<T>({ items, total }: Params<T>) {
  let totalPages = 0;

  if (total) {
    totalPages = Math.ceil(total / limit);
  }

  return { items, totalPages };
}

function formatListParams(params?: GetItems) {
  const page = params?.page && params.page > 0 ? params.page : 1;

  const offset = (page - 1) * limit;

  return { limit, offset };
}

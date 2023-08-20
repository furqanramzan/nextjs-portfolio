'use server';

import { getRepository } from '@/repositories';

interface GetItems {
  page?: number;
}

export async function getItems(params?: GetItems) {
  const items = await getRepository('admin').getMany(formatListParams(params));
  return formatListResponse(items);
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

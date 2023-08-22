const limit = 20;

export interface GetItems {
  page?: number;
}
interface Params<TData> {
  items: TData;
  total?: number;
}

export function formatListResponse<T>({ items, total }: Params<T>) {
  let totalPages = 0;

  if (total) {
    totalPages = Math.ceil(total / limit);
  }

  return { items, totalPages };
}

export function formatListParams(params?: GetItems) {
  const page = params?.page && params.page > 0 ? params.page : 1;

  const offset = (page - 1) * limit;

  return { limit, offset };
}

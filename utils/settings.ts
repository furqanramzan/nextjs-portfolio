import { getRepository } from './repository';
import { type Setting } from '@/app/admin/auth/setting/repository';

type Response<T extends Setting['key']> = Record<T, string>;

export async function getSettings<T extends Setting['key']>(
  keys: T[],
): Promise<Response<T>> {
  const items = await getRepository('setting').getManyByKey(keys);
  const settings: Response<T> = {} as Response<T>;
  for (const { key, content } of items) {
    settings[key as T] = content;
  }
  return settings;
}

export function throwIfNotFound<T>(item?: T | null) {
  if (!item) {
    throw new Error('404');
  }
  return item;
}

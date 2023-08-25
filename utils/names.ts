import { noCase, paramCase } from 'text-case';

export function names(singular: string, plural?: string) {
  if (!plural) {
    plural = `${singular}s`;
  }

  const singularName = noCase(singular);
  const pluralName = noCase(plural);
  const href = paramCase(singular);

  return { singularName, pluralName, href };
}

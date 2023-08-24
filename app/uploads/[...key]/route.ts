import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { notFound } from 'next/navigation';

export async function GET(
  request: Request,
  context: { params: { key: string[] } },
) {
  const filePath = context.params.key.reduce(
    (previous, current) => join(previous, current),
    'uploads',
  );

  if (!existsSync(filePath)) {
    return notFound();
  }

  const fileStream = readFileSync(filePath);

  return new Response(fileStream);
}

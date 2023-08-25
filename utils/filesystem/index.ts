import { env } from 'node:process';
import type { File } from 'node:buffer';
import sharp, { type ResizeOptions, type Sharp } from 'sharp';
import { sThree } from './s-three';
import { local } from './local';

let filesystem = local;
if (env.FILESYSTEM_DISK === 'S3') {
  filesystem = sThree;
}

const resizes: Record<'service' | 'project', ResizeOptions> = {
  service: {
    width: 32,
    height: 32,
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
  project: {
    width: 340,
    height: 205,
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
};

export async function uploadSharp<T extends keyof typeof resizes>(
  file: Sharp,
  resize?: T,
) {
  if (resize) {
    file.resize(resizes[resize]);
  }
  const link = await filesystem.store(
    file.webp(),
    `${crypto.randomUUID()}.webp`,
  );
  return link || '';
}

export async function uploadFile<TType extends 'one' | 'many'>(
  files: File[],
  type: TType,
) {
  const links: string[] = [];
  for await (const file of files) {
    const { file: optimizedFile, name } = await optimizeFile(file);
    const link = await filesystem.store(optimizedFile, name);
    if (link) {
      links.push(link);
    }
  }

  // TODO: Provider placeholder image instead of empty string
  const result = {
    one: links[0] || '',
    many: links,
  };

  return result[type];
}

export function deleteFile(key?: string | null) {
  if (key) {
    return filesystem.destroy(key);
  }
}

async function optimizeFile(file: File) {
  const input = await file.arrayBuffer();
  return { file: sharp(input).webp(), name: `${crypto.randomUUID()}.webp` };
}

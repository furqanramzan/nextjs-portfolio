import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { getRepository } from '@/utils/repository';
import { uploadSharp } from '@/utils/filesystem';

const projectData = [
  {
    title: 'Smart Bank App',
    category: 'App Development',
    image: 'project-1',
  },
  {
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'project-2',
  },
  {
    title: 'Online Learning Platform',
    category: 'EdTech',
    image: 'project-3',
  },
  {
    title: 'Travel Booking App',
    category: 'App Development',
    image: 'project-4',
  },
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    image: 'project-5',
  },
];

export async function projects() {
  const data = structuredClone(projectData);
  for await (const project of data) {
    const imagePath = getFileInCurrentDirectory(`images/${project.image}.png`);
    const image = sharp(imagePath);
    project.image = await uploadSharp(image, 'project');
  }
  const items = await getRepository('project').createMany(data);
  return items;
}

function getFileInCurrentDirectory(filename: string) {
  return join(dirname(fileURLToPath(import.meta.url)), filename);
}

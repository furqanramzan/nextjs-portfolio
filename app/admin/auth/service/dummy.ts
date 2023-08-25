import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { getRepository } from '@/utils/repository';
import { uploadSharp } from '@/utils/filesystem';

const serviceData = [
  {
    title: 'Web Development',
    description:
      "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    icon: 'service-1',
  },
  {
    title: 'App Development',
    description:
      "With a focus on user-centric design and cutting-edge technologies, I thrive on  building intuitive and efficient apps  that make a positive impact on people's  lives. Let's turn ideas into reality and  shape the future together.",
    icon: 'service-2',
  },
  {
    title: 'UI/UX Designing',
    description:
      "Crafting visually appealing and intuitive user interfaces that offer a delightful user  experience is something I'm truly fanatic  about.",
    icon: 'service-3',
  },
  {
    title: 'Mentorship',
    description:
      'I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career. ',
    icon: 'service-4',
  },
];

export async function services() {
  const data = structuredClone(serviceData);
  for await (const service of data) {
    const iconPath = getFileInCurrentDirectory(`images/${service.icon}.svg`);
    const icon = sharp(iconPath);
    service.icon = await uploadSharp(icon, 'service');
  }
  const items = await getRepository('service').createMany(data);
  return items;
}

function getFileInCurrentDirectory(filename: string) {
  return join(dirname(fileURLToPath(import.meta.url)), filename);
}

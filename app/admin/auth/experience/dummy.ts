import { getRepository } from '@/utils/repository';

const experienceData = [
  {
    year: '2022 - Present',
    title: 'Technical Mentor',
    institute: 'Moringa School',
  },
  {
    year: '2021-2022',
    title: 'Website Development',
    institute: 'Village 2 Nation',
  },
];

export async function experiences() {
  const items = await getRepository('experience').createMany(experienceData);
  return items;
}

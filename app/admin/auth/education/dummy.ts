import { getRepository } from '@/repositories';

const educationData = [
  {
    year: '2020-2021',
    title: 'Software Development',
    institute: 'Moringa School',
  },
  {
    year: '2012-2016',
    title: 'Disaster Management',
    institute: 'Masinde Muliro Universiity',
  },
];

export async function educations() {
  const items = await getRepository('education').createMany(educationData);
  return items;
}

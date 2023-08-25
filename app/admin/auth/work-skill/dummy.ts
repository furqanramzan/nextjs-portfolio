import { getRepository } from '@/utils/repository';

const workSkillData = [
  { title: 'NEXT.js' },
  { title: 'React.js' },
  { title: 'HTML 5' },
  { title: 'CSS 3' },
  { title: 'Tailwind CSS' },
  { title: 'Figma' },
  { title: 'JavaScript' },
  { title: 'Mongo DB' },
  { title: 'SQL' },
  { title: 'Angular' },
  { title: 'Android' },
  { title: 'Git' },
];

export async function workSkills() {
  const items = await getRepository('workSkill').createMany(workSkillData);
  return items;
}

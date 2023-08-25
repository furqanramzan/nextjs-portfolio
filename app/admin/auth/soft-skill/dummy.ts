import { getRepository } from '@/utils/repository';

const softSkillData = [
  { title: 'Time Management' },
  { title: 'Mentorship' },
  { title: 'Impeccable Communication' },
  { title: 'Flexibility' },
  { title: 'Research' },
  { title: 'Writing' },
];

export async function softSkills() {
  const items = await getRepository('softSkill').createMany(softSkillData);
  return items;
}

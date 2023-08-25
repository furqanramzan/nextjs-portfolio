import Form from '../../Form';
import { getRepository } from '@/utils/repository';

interface Props {
  params: { id: string };
}

export default async function SoftSkillCreate({ params: { id } }: Props) {
  const item = await getRepository('softSkill').getOne(Number(id));

  return <Form item={item} />;
}

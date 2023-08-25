import Form from '../../Form';
import { getRepository } from '@/utils/repository';

interface Props {
  params: { id: string };
}

export default async function WorkSkillCreate({ params: { id } }: Props) {
  const item = await getRepository('workSkill').getOne(Number(id));

  return <Form item={item} />;
}

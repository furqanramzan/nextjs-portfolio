import Form from '../../Form';
import { getRepository } from '@/utils/repository';

interface Props {
  params: { id: string };
}

export default async function ProjectCreate({ params: { id } }: Props) {
  const item = await getRepository('project').getOne(Number(id));

  return <Form item={item} />;
}

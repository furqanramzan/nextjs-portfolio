import Form from '../../Form';
import { getRepository } from '@/utils/repository';

interface Props {
  params: { id: string };
}

export default async function AdminCreate({ params: { id } }: Props) {
  const item = await getRepository('admin').getOne(Number(id));

  return <Form item={item} />;
}

import { getRepository } from '@/repositories';
import Form from '@/app/admin/auth/admin/Form';

interface Props {
  params: { id: string };
}

export default async function AdminCreate({ params: { id } }: Props) {
  const item = await getRepository('admin').getOne(Number(id));

  return <Form item={item} />;
}

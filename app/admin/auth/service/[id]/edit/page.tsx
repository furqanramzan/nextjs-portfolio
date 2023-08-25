import { getRepository } from '@/utils/repository';
import Form from '@/app/admin/auth/service/Form';

interface Props {
  params: { id: string };
}

export default async function ServiceCreate({ params: { id } }: Props) {
  const item = await getRepository('service').getOne(Number(id));

  return <Form item={item} />;
}

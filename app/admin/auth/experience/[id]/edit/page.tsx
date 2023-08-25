import { getRepository } from '@/utils/repository';
import Form from '@/app/admin/auth/experience/Form';

interface Props {
  params: { id: string };
}

export default async function ExperienceCreate({ params: { id } }: Props) {
  const item = await getRepository('experience').getOne(Number(id));

  return <Form item={item} />;
}

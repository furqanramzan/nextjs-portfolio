import Form from '../../Form';
import { getRepository } from '@/utils/repository';

interface Props {
  params: { id: string };
}

export default async function EducationCreate({ params: { id } }: Props) {
  const item = await getRepository('education').getOne(Number(id));

  return <Form item={item} />;
}

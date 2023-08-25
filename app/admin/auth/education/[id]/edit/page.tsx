import { getRepository } from '@/utils/repository';
import Form from '@/app/admin/auth/education/Form';

interface Props {
  params: { id: string };
}

export default async function EducationCreate({ params: { id } }: Props) {
  const item = await getRepository('education').getOne(Number(id));

  return <Form item={item} />;
}

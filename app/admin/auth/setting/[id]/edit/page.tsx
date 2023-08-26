import Form from '../../Form';
import { getRepository } from '@/utils/repository';

interface Props {
  params: { id: string };
}

export default async function SettingCreate({ params: { id } }: Props) {
  const item = await getRepository('setting').getOne(Number(id));

  return <Form item={item} />;
}

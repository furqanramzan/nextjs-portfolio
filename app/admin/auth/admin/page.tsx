import { destroy, get } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';

const name = { singular: 'admin' };

export default async function Admin() {
  const { items } = await get();

  return (
    <List items={items} name={name} columns={['Name', 'Email']}>
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.name}
          columns={[item.email]}
          link={name.singular}
          destroy={destroy}
        />
      ))}
    </List>
  );
}

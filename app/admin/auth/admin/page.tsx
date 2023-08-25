import { destroy, get } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';
import { names } from '@/utils/names';

const name = { singular: 'admin' };
const { singularName, pluralName, href } = names('admin');

export default async function Admin() {
  const { items } = await get();

  return (
    <List
      items={items}
      singularName={singularName}
      pluralName={pluralName}
      href={href}
      columns={['Name', 'Email']}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.name}
          columns={[item.email]}
          href={name.singular}
          destroy={destroy}
        />
      ))}
    </List>
  );
}

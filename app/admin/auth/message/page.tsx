import { destroy, get } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';
import { names } from '@/utils/names';

const { singularName, pluralName } = names('message');

export default async function Message() {
  const { items } = await get();

  return (
    <List
      items={items}
      singularName={singularName}
      pluralName={pluralName}
      columns={['Name', 'Email', 'Message']}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.name}
          columns={[item.email, item.message]}
          destroy={destroy}
        />
      ))}
    </List>
  );
}

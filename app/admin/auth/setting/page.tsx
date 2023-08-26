import { dummy, get } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';
import { names } from '@/utils/names';

const { singularName, pluralName, href } = names('setting');

export default async function Setting() {
  const { items } = await get();

  return (
    <List
      items={items}
      singularName={singularName}
      pluralName={pluralName}
      columns={['Name', 'Content']}
      dummy={dummy}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.name}
          columns={[item.content]}
          href={href}
        />
      ))}
    </List>
  );
}

import { destroy, dummy, get } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';
import { names } from '@/utils/names';

const { singularName, pluralName, href } = names('softSkill');

export default async function WorkSkill() {
  const { items } = await get();

  return (
    <List
      items={items}
      singularName={singularName}
      pluralName={pluralName}
      href={href}
      columns={['Title']}
      dummy={dummy}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.title}
          href={href}
          destroy={destroy}
        />
      ))}
    </List>
  );
}

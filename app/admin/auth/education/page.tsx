import { destroy, dummy, get } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';

const name = { singular: 'education' };

export default async function Education() {
  const { items } = await get();

  return (
    <List
      items={items}
      name={name}
      columns={['Title', 'Institute', 'Year']}
      dummy={dummy}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.title}
          columns={[item.institute, item.year]}
          link={name.singular}
          destroy={destroy}
        />
      ))}
    </List>
  );
}

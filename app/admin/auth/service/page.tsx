import { getItems } from './actions';
import List from '@/components/list/List';
import Row from '@/components/list/Row';

const name = { singular: 'service' };

export default async function Service() {
  const { items } = await getItems();

  return (
    <List items={items} name={name} columns={['Title', 'Description', 'Icon']}>
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.title}
          columns={[item.description]}
          link={name.singular}
        >
          <td className="px-6 py-4">
            <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
          </td>
        </Row>
      ))}
    </List>
  );
}

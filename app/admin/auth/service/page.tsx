import { destroy, dummy, get } from './actions';
import Image from '@/components/Image';
import List from '@/components/list/List';
import Row from '@/components/list/Row';

const name = { singular: 'service' };

export default async function Service() {
  const { items } = await get();

  return (
    <List
      items={items}
      name={name}
      columns={['Title', 'Description', 'Icon']}
      dummy={dummy}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.title}
          columns={[item.description]}
          link={name.singular}
          destroy={destroy}
        >
          <td className="px-6 py-4">
            <a href={item.icon} target="_blank">
              <Image
                loading="lazy"
                width="32"
                height="32"
                className="rounded-md"
                src={item.icon}
                alt={item.title}
              />
            </a>
          </td>
        </Row>
      ))}
    </List>
  );
}

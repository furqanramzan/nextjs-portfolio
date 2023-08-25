import { destroy, dummy, get } from './actions';
import HrefImage from '@/components/HrefImage';
import List from '@/components/list/List';
import Row from '@/components/list/Row';
import { names } from '@/utils/names';

const { singularName, pluralName, href } = names('service');

export default async function Service() {
  const { items } = await get();

  return (
    <List
      items={items}
      singularName={singularName}
      pluralName={pluralName}
      href={href}
      columns={['Title', 'Description', 'Icon']}
      dummy={dummy}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.title}
          columns={[item.description]}
          href={href}
          destroy={destroy}
        >
          <td className="px-6 py-4">
            <HrefImage
              loading="lazy"
              width="32"
              height="32"
              className="rounded-md"
              src={item.icon}
              alt={item.title}
            />
          </td>
        </Row>
      ))}
    </List>
  );
}

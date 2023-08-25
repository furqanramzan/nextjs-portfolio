import { destroy, dummy, get } from './actions';
import HrefImage from '@/components/HrefImage';
import List from '@/components/list/List';
import Row from '@/components/list/Row';
import { names } from '@/utils/names';

const { singularName, pluralName, href } = names('project');

export default async function Project() {
  const { items } = await get();

  return (
    <List
      items={items}
      singularName={singularName}
      pluralName={pluralName}
      href={href}
      columns={['Title', 'Category', 'Image']}
      dummy={dummy}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          itemId={item.id}
          headingColumn={item.title}
          columns={[item.category]}
          href={href}
          destroy={destroy}
        >
          <td className="px-6 py-4">
            <HrefImage
              loading="lazy"
              width="32"
              height="32"
              className="rounded-md"
              src={item.image}
              alt={item.title}
            />
          </td>
        </Row>
      ))}
    </List>
  );
}

import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  link: string;
  itemId: number;
  headingColumn: string | number;
  columns: Array<string | number>;
  children?: ReactNode;
}

export default function Row({
  headingColumn,
  columns,
  children,
  itemId,
  link,
}: Props) {
  return (
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {headingColumn}
      </th>
      {columns.map((column, index) => (
        <td key={index} className="px-6 py-4">
          {column}
        </td>
      ))}
      {children}
      <td className="flex justify-end gap-4 px-6 py-4">
        <Link
          href={`/admin/auth/${link}/${itemId}/edit`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}

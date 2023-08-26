import type { ReactNode } from 'react';
import DummyDataButton, { type DummyCallback } from './DummyDataButton';
import AddLink from './AddLink';
import NoDataRow from './NoDataRow';
import { DEV } from '@/utils/constants';

interface Props {
  columns: string[];
  items: Record<string, unknown>[];
  dummy?: DummyCallback;
  singularName: string;
  pluralName: string;
  href?: string;
  children: ReactNode;
}

export default function List({
  singularName,
  pluralName,
  href,
  columns,
  items,
  dummy,
  children,
}: Props) {
  return (
    <div className="relative flex flex-col gap-y-5 overflow-x-auto">
      <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-x-4 md:space-y-0">
        <h1 className="mb-0 bg-white text-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-white">
          All {pluralName}
        </h1>

        <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
          {DEV && dummy && <DummyDataButton dummy={dummy} />}
          {href && (
            <AddLink href={`/admin/auth/${href}/create`} name={singularName} />
          )}
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column, index) => (
                <td className="px-6 py-4" key={index}>
                  {column}
                </td>
              ))}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <NoDataRow totalItems={items.length} colspan={5} />
            {children}
          </tbody>
          <tfoot className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column, index) => (
                <td className="px-6 py-4" key={index}>
                  {column}
                </td>
              ))}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

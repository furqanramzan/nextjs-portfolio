interface Props {
  totalItems: number;
  colspan: number;
}

export default function NoDataRow({ totalItems, colspan }: Props) {
  return (
    totalItems === 0 && (
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <th
          colSpan={colspan}
          scope="row"
          className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white"
        >
          Currently, there is no data available.
        </th>
      </tr>
    )
  );
}

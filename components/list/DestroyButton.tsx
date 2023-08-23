'use client';

import { useRouter } from 'next/navigation';

export type DestroyCallback = (id: number) => Promise<{ id: number }>;
interface Props {
  itemId: number;
  destroy: DestroyCallback;
}

export default function DestroyButton({ itemId, destroy }: Props) {
  const router = useRouter();
  async function handleDestroy() {
    await destroy(itemId);
    router.refresh();
  }

  return (
    <button
      onClick={handleDestroy}
      type="button"
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      Delete
    </button>
  );
}

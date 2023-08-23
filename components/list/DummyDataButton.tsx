'use client';

import { useRouter } from 'next/navigation';

export type DummyCallback = () => Promise<void>;
interface Props {
  dummy: DummyCallback;
}

export default function DummyDataButton({ dummy }: Props) {
  const router = useRouter();
  async function handleDummy() {
    await dummy();
    router.refresh();
  }

  return (
    <button
      onClick={handleDummy}
      type="button"
      className="flex items-center justify-center rounded-lg bg-secondary-600 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-700 focus:outline-none focus:ring-4 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
        />
      </svg>
      Add dummy data
    </button>
  );
}

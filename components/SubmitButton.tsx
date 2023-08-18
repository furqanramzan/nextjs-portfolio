import type { ReactNode } from 'react';

interface Props {
  wFull?: boolean;
  submitting?: boolean;
  children: ReactNode;
}

export default function SubmitButton({ wFull, submitting, children }: Props) {
  const wFullClass = wFull ? 'w-full justify-center' : '';

  return (
    <button
      disabled={submitting}
      type="submit"
      className={`bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 ${wFullClass}`}
    >
      {submitting ? 'Loading...' : children}
    </button>
  );
}

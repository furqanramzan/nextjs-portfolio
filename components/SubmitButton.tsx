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
      className={`inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${wFullClass}`}
    >
      {submitting ? 'Loading...' : children}
    </button>
  );
}

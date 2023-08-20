import type { FormEvent, ReactNode } from 'react';
import Link from 'next/link';
import LightButton from './LightButton';
import SubmitButton from '@/components/SubmitButton';

type Enctype =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain';
interface Props {
  name: { plural?: string; singular: string };
  /**
   * @default text/plain
   */
  enctype?: Enctype;
  submitting: boolean;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => unknown;
}

export default function Upsert({
  name,
  enctype,
  submitting,
  children,
  onSubmit,
}: Props) {
  if (!enctype) {
    enctype = 'text/plain';
  }
  if (!name.plural) {
    name.plural = `${name.singular}s`;
  }

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="mb-0 bg-white text-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-white">
        Add a new {name.singular}
      </h1>

      <form encType={enctype} method="post" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">{children}</div>
        <div className="mt-4 flex gap-x-3 sm:mt-6">
          <SubmitButton submitting={submitting}>
            Add {name.singular}
          </SubmitButton>
          <Link href={`/admin/auth/${name.singular}`}>
            <LightButton content={`All ${name.plural}`} />
          </Link>
        </div>
      </form>
    </div>
  );
}

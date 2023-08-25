import type { FormEvent, ReactNode } from 'react';
import Link from 'next/link';
import LightButton from './LightButton';
import SubmitButton from '@/components/SubmitButton';

type Enctype =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain';
interface Props {
  /**
   * @default text/plain
   */
  enctype?: Enctype;
  submitting: boolean;
  singularName: string;
  pluralName: string;
  href: string;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => unknown;
}

export default function Upsert({
  singularName,
  pluralName,
  href,
  enctype,
  submitting,
  children,
  onSubmit,
}: Props) {
  if (!enctype) {
    enctype = 'text/plain';
  }

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="mb-0 bg-white text-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-white">
        Add a new {singularName}
      </h1>

      <form encType={enctype} method="post" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">{children}</div>
        <div className="mt-4 flex gap-x-3 sm:mt-6">
          <SubmitButton submitting={submitting}>
            Add {singularName}
          </SubmitButton>
          <Link href={`/admin/auth/${href}`}>
            <LightButton content={`All ${pluralName}`} />
          </Link>
        </div>
      </form>
    </div>
  );
}

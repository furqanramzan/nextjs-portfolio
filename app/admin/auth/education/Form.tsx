'use client';

import type { Education } from './repository';
import { upsert } from './actions';
import { upsertEducationSchema } from './validations';
import Upsert from '@/app/admin/auth/components/Upsert';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import { names } from '@/utils/names';

interface Props {
  item?: Education;
}

const { singularName, pluralName, href } = names('education');

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertEducationSchema,
  });

  return (
    <Upsert
      onSubmit={submit}
      singularName={singularName}
      pluralName={pluralName}
      href={href}
      submitting={submitting}
    >
      <Input
        input={{
          name: 'id',
          type: 'hidden',
          value: item?.id,
          showLabel: false,
        }}
      />
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'title',
            errors: errors.title,
            value: item?.title,
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'institute',
            errors: errors.institute,
            value: item?.institute,
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'year',
            errors: errors.year,
            value: item?.year,
          }}
        />
      </div>
    </Upsert>
  );
}

'use client';

import type { Experience } from './repository';
import { upsert } from '@/app/admin/auth/experience/actions';
import Upsert from '@/app/admin/auth/components/Upsert';
import { upsertExperienceSchema } from '@/app/admin/auth/experience/validations';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';

interface Props {
  item?: Experience;
}

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertExperienceSchema,
  });

  return (
    <Upsert
      onSubmit={submit}
      name={{ singular: 'experience' }}
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

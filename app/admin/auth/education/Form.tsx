'use client';

import { upsert } from '@/app/admin/auth/education/actions';
import Upsert from '@/app/admin/auth/components/Upsert';
import { upsertEducationSchema } from '@/app/admin/auth/education/validations';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import type { Education } from '@/repositories/education-repository';

interface Props {
  item?: Education;
}

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertEducationSchema,
  });

  return (
    <Upsert
      onSubmit={submit}
      name={{ singular: 'education' }}
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

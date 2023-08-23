'use client';

import { upsert } from '@/app/admin/auth/service/actions';
import Upsert from '@/app/admin/auth/components/Upsert';
import { upsertServiceSchema } from '@/app/admin/auth/service/validations';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import type { Service } from '@/repositories/service-repository';

interface Props {
  item?: Service;
}

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertServiceSchema,
  });

  return (
    <Upsert
      onSubmit={submit}
      name={{ singular: 'service' }}
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
            name: 'description',
            errors: errors.description,
            value: item?.description,
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'icon',
            errors: errors.icon,
            value: item?.icon,
          }}
        />
      </div>
    </Upsert>
  );
}

'use client';

import type { Admin } from './repository';
import { upsert } from '@/app/admin/auth/admin/actions';
import Upsert from '@/app/admin/auth/components/Upsert';
import { upsertAdminSchema } from '@/app/admin/validations';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';

interface Props {
  item?: Admin;
}

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsert,
    schema: upsertAdminSchema,
  });

  return (
    <Upsert
      onSubmit={submit}
      name={{ singular: 'admin' }}
      submitting={submitting}
    >
      <Input
        input={{
          name: 'id',
          type: 'hidden',
          value: item?.id,
        }}
      />
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'name',
            placeholder: 'John Doe',
            errors: errors.name,
            value: item?.name,
          }}
        />
      </div>
      <div>
        <Input
          input={{
            name: 'email',
            placeholder: 'name@company.com',
            autoComplete: 'username',
            errors: errors.email,
            value: item?.email,
          }}
        />
      </div>
      <div>
        <Input
          input={{
            name: 'password',
            type: 'password',
            placeholder: '••••••••',
            autoComplete: 'new-password',
            required: item === undefined,
            errors: errors.password,
          }}
        />
      </div>
    </Upsert>
  );
}

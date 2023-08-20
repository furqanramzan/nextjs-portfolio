'use client';

import { upsertAdmin } from '@/app/admin/auth/admin/actions';
import Upsert from '@/app/admin/auth/components/Upsert';
import { upsertAdminSchema } from '@/app/admin/validation';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';
import type { Admin } from '@/repositories/admin-repository';

interface Props {
  item?: Admin;
}

export default function Form({ item }: Props) {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsertAdmin,
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

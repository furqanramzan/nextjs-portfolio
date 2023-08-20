'use client';

import { upsertAdmin } from './actions';
import Upsert from '@/app/admin/auth/components/Upsert';
import { upsertAdminSchema } from '@/app/admin/validation';
import Input from '@/components/Input';
import { useSubmitForm } from '@/hooks/submit-form';

export default function Form() {
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
      <div className="sm:col-span-2">
        <Input
          input={{
            name: 'name',
            placeholder: 'John Doe',
            errors: errors.name,
          }}
        />
      </div>
      <div>
        <Input
          input={{
            name: 'email',
            placeholder: 'name@company.com',
            errors: errors.email,
          }}
        />
      </div>
      <div>
        <Input
          input={{
            name: 'password',
            type: 'password',
            placeholder: '••••••••',
            errors: errors.password,
          }}
        />
      </div>
    </Upsert>
  );
}

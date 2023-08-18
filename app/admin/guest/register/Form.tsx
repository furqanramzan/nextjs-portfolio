'use client';

import { upsertAdmin } from './actions';
import { upsertAdminSchema } from './validation';
import AppInput from '@/app/components/AppInput';
import SubmitButton from '@/app/components/SubmitButton';
import { useSubmitForm } from '@/app/utils/submit-form';

export default function Form() {
  const { submitting, errors, submit } = useSubmitForm({
    callback: upsertAdmin,
    schema: upsertAdminSchema,
  });
  return (
    <form onSubmit={submit} className="space-y-4 md:space-y-6">
      <div>
        <AppInput
          input={{
            name: 'name',
            label: 'Your name',
            placeholder: 'John doe',
            errors: errors.name,
          }}
        />
      </div>
      <div>
        <AppInput
          input={{
            name: 'email',
            label: 'Your email',
            placeholder: 'name@company.com',
            autoComplete: 'username',
            errors: errors.email,
          }}
        />
      </div>
      <div>
        <AppInput
          input={{
            name: 'password',
            type: 'password',
            placeholder: '••••••••',
            autoComplete: 'new-password',
            errors: errors.password,
          }}
        />
      </div>
      <SubmitButton wFull={true} submitting={submitting}>
        Sign up
      </SubmitButton>
    </form>
  );
}

'use client';

import { login } from './actions';
import { loginSchema } from './validations';
import Input from '@/components/Input';
import ErrorAlert from '@/components/ErrorAlert';
import SubmitButton from '@/components/SubmitButton';
import { useSubmitForm } from '@/hooks/submit-form';

export default function Form() {
  const { submitting, message, errors, submit } = useSubmitForm({
    callback: login,
    schema: loginSchema,
  });

  return (
    <>
      {message && <ErrorAlert>{message}</ErrorAlert>}
      <form onSubmit={submit} className="space-y-4 md:space-y-6">
        <div>
          <Input
            input={{
              name: 'email',
              type: 'email',
              label: 'Your email',
              placeholder: 'name@company.com',
              autoComplete: 'username',
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
              autoComplete: 'current-password',
              errors: errors.password,
            }}
          />
        </div>
        <SubmitButton submitting={submitting} wFull={true}>
          Sign in
        </SubmitButton>
      </form>
    </>
  );
}

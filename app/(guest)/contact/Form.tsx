'use client';

import { createContactSchema } from './validations';
import { create } from './actions';
import { useSubmitForm } from '@/hooks/submit-form';
import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import SuccessAlert from '@/components/SuccessAlert';

export default function Form() {
  const { submitting, message, errors, submit } = useSubmitForm({
    callback: create,
    schema: createContactSchema,
  });

  return (
    <>
      <SuccessAlert>{message}</SuccessAlert>
      <form onSubmit={submit} method="post" className="grid gap-4 ">
        <Input
          input={{ name: 'name', placeholder: 'John Doe', errors: errors.name }}
        />
        <Input
          input={{
            name: 'email',
            type: 'email',
            placeholder: 'name@company.com',
            errors: errors.email,
          }}
        />
        <Input
          input={{
            name: 'message',
            type: 'textarea',
            placeholder:
              "I want to talk about the exciting new project I'd like you to build for me...",
            errors: errors.message,
          }}
        />
        <div>
          <SubmitButton submitting={submitting}>Send message</SubmitButton>
        </div>
      </form>
    </>
  );
}

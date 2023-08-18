import { type FormEvent, useState } from 'react';
import type { ZodType, z } from 'zod';
import { type FieldErrors, validate } from './validate';

interface CallbackResponse<TRequest, TResponse> {
  data?: TResponse;
  errors?: FieldErrors<TRequest>;
}
type Callback<TRequest, TResponse> = (
  data: z.infer<ZodType<TRequest>>,
) => Promise<CallbackResponse<TRequest, TResponse> | undefined>;

interface FormOptions<TRequest, TResponse> {
  callback: Callback<TRequest, TResponse>;
  schema: ZodType<TRequest>;
}

export function useSubmitForm<TRequest, TResponse>({
  callback,
  schema,
}: FormOptions<TRequest, TResponse>) {
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<TResponse>();
  const [errors, setErrors] = useState<FieldErrors<TRequest>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const formDataEntries = Object.fromEntries(formData.entries());

    const validateData = validate(formDataEntries, schema);

    if (!validateData.validated) {
      setErrors(validateData.errors);
    } else {
      setErrors({});
      const response = await callback(validateData.data);

      if (response) {
        const { data: responseData, errors: responseErrors } = response;

        if (responseData) {
          setData(responseData);
        }

        if (responseErrors) {
          setErrors(responseErrors);
        }
      }
    }

    setSubmitting(false);
  }

  return { submitting, data, errors, submit };
}

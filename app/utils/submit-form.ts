import { type FormEvent, useState } from 'react';
import type { ZodType } from 'zod';

type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

interface CallbackResponse<TRequest, TResponse> {
  data?: TResponse;
  errors?: FieldErrors<TRequest>;
}
type Callback<TRequest, TResponse> = (
  data: TRequest,
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

    const validatedData = schema.safeParse(formDataEntries);

    if (validatedData.success) {
      setErrors({});
      const response = await callback(validatedData.data);

      if (response) {
        const { data: responseData, errors: responseErrors } = response;

        if (responseData) {
          setData(responseData);
        }

        if (responseErrors) {
          setErrors(responseErrors);
        }
      }
    } else {
      // TODO: Remove following as keyword
      const fieldErrors = validatedData.error.flatten()
        .fieldErrors as FieldErrors<TRequest>;
      setErrors(fieldErrors);
    }

    setSubmitting(false);
  }

  return { submitting, data, errors, submit };
}

import { type FormEvent, useState } from 'react';
import type { ZodType, z } from 'zod';
import { type FieldErrors, validate } from '../utils/validate';

interface CallbackResponse<TRequest, TResponse> {
  data?: TResponse;
  errors?: FieldErrors<TRequest>;
  message?: string;
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
  const [message, setMessage] = useState<string>();
  const [errors, setErrors] = useState<FieldErrors<TRequest>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const formDataEntries = Object.fromEntries(formData.entries());

    const validateData = await validate(formDataEntries, schema);

    if (!validateData.validated) {
      setErrors(validateData.errors);
    } else {
      setErrors({});
      const response = await callback(validateData.data);

      if (response) {
        const {
          message: responseMessage,
          data: responseData,
          errors: responseErrors,
        } = response;

        if (responseMessage) {
          setMessage(responseMessage);
        }

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

  return { submitting, message, data, errors, submit };
}

import type { ZodType, z } from 'zod';

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

interface SuccessResponse<T> {
  validated: true;
  data: z.infer<ZodType<T>>;
}
interface ErrorResponse<T> {
  validated: false;
  errors: FieldErrors<T>;
}

type ValidationResponse<T> = SuccessResponse<T> | ErrorResponse<T>;

export async function validate<T>(
  inputs: unknown,
  schema: ZodType<T>,
): Promise<ValidationResponse<T>> {
  const parse = await schema.safeParseAsync(inputs);

  if (parse.success) {
    const { data } = parse;
    return { validated: true, data };
  } else {
    // TODO: Remove following as keyword
    const errors = parse.error.flatten().fieldErrors as FieldErrors<
      z.infer<typeof schema>
    >;
    return { validated: false, errors };
  }
}

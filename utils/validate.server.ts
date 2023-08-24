import { File } from 'node:buffer';
import { type ZodType, array, type z, instanceof as zodInstanceof } from 'zod';

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
  inputs: unknown | FormData,
  schema: ZodType<T>,
): Promise<ValidationResponse<T>> {
  if (inputs instanceof FormData) {
    inputs = getFormEntries(inputs);
  }

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

function getFormEntries(formData: FormData) {
  const entries: Record<string, unknown> = {};
  for (const key of formData.keys()) {
    const data = formData.getAll(key);
    entries[key] =
      data.length === 1 && !(data.at(0) instanceof File) ? data.at(0) : data;
  }
  return entries;
}

export function fileValidation(min: number = 1, max?: number) {
  max ??= min;
  return array(zodInstanceof(File)).min(min).max(max);
}

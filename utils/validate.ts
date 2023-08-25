import { type ZodType, array, custom, type z } from 'zod';

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

    if (typeof data.at(0) === 'string') {
      entries[key] = data.length === 1 ? data.at(0) : data;
    } else {
      const files = data.filter((x) => (x as unknown as File).size > 0);
      if (files.length > 0) {
        entries[key] = files;
      }
    }
  }

  return entries;
}

export function fileValidation(max = -1) {
  return array(custom<File>()).max(max).optional();
}

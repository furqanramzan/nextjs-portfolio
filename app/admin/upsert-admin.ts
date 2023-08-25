import { validate } from '@/utils/validate.server';
import { getRepository } from '@/utils/repository';
import { throwIfNotFound } from '@/utils/errors';
import { hash } from '@/utils/hash';
import { upsertAdminSchema as schema } from '@/app/admin/validations';

const upsertAdminSchema = schema
  .refine(({ id, password }) => Boolean(password || id), {
    message: 'String must contain at least 1 character(s)',
    path: ['password'],
  })
  .refine(({ email, id }) => uniqueAdminEmail(email, id), {
    message: 'The email already exists.',
    path: ['email'],
  });

export async function upsertAdmin(inputs: FormData) {
  const parse = await validate(inputs, upsertAdminSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }

  const repository = getRepository('admin');
  let data: Awaited<ReturnType<typeof repository.create>>;

  const { id, password, ...values } = parse.data;

  if (id) {
    const result = await repository.update(values, id);
    data = throwIfNotFound(result);
  } else {
    data = await repository.create(values);
  }

  await savePassword(data.id, password);

  return { data };
}

async function uniqueAdminEmail(email: string, id?: number) {
  const repository = getRepository('admin');
  const exists = await repository.emailExists(email, id);
  return !exists;
}

async function savePassword(adminId: number, password?: string) {
  if (password) {
    password = await hash.hash(password);
    await getRepository('adminPassword').upsert({ password, adminId });
  }
}

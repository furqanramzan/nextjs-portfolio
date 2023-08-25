'use server';

import { redirect } from 'next/navigation';
import { loginSchema } from './validations';
import { getRepository } from '@/utils/repository';
import { validate } from '@/utils/validate';
import { hash } from '@/utils/hash';
import { jwt } from '@/utils/jwt';
import { setToken } from '@/app/admin/token';

export async function login(inputs: FormData) {
  const parse = await validate(inputs, loginSchema);
  if (!parse.validated) {
    const { errors } = parse;
    return { errors };
  }

  const { email, password } = parse.data;
  const repository = getRepository('admin');
  const loginData = await repository.getLoginData(email);

  if (loginData) {
    const { adminPassword, ...jwtData } = loginData;
    const passwordMatched = await hash.compare(
      password,
      adminPassword.password,
    );
    if (passwordMatched) {
      const token = await jwt.encode(jwtData);
      setToken(token);

      redirect('/admin/auth/admin');
    }
  }

  return { message: 'The email or password does not match' };
}

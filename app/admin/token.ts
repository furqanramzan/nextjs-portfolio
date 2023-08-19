import { cookies } from 'next/headers';
import { jwt } from '@/utils/jwt';

export function setToken(token: string) {
  cookies().set({
    name: 'authorization',
    value: token,
    // send cookie for every page
    path: '/',
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: 'strict',
    // only sent over HTTPS
    secure: true,
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function getAdmin() {
  const token = getToken();

  if (token) {
    return jwt.verify(token.value);
  }
}

export function getToken() {
  return cookies().get('authorization');
}

import { cookies } from 'next/headers';

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
    secure: false,
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  });
}

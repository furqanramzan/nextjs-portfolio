import { cookies } from 'next/headers';

export type ColorTheme = 'dark' | 'light';

export function setColorThemeCookie(colorTheme: ColorTheme) {
  cookies().set('color-theme', colorTheme);
}

export function themeClass() {
  const theme = cookies().get('color-theme');
  return theme?.value === 'dark' ? 'dark' : '';
}

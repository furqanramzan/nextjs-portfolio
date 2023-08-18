'use server';

import type { ColorTheme } from './utils';
import { setColorThemeCookie } from './utils';

export async function setColorTheme(colorTheme: ColorTheme) {
  setColorThemeCookie(colorTheme);
}

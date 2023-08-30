import { APP_NAME } from './constants';

export function getTitle(title?: string) {
  return title ? `${APP_NAME} | ${title}` : APP_NAME;
}

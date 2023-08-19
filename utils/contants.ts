import { z } from 'zod';

const constants = z
  .object({
    NEXT_PUBLIC_APP_NAME: z.string(),
    JWT_SECRET: z.string(),
  })
  // eslint-disable-next-line n/prefer-global/process
  .parse(process.env);

export const APP_NAME = constants.NEXT_PUBLIC_APP_NAME;

export const JWT_SECRET = constants.JWT_SECRET;

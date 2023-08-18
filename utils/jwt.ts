import jwtwebtoken from 'jsonwebtoken';
import { env } from 'node:process';
import { z } from 'zod';

export interface JwtData {
  id: number;
  name: string;
  email: string;
}

const { secret } = getConstants();

class Jwt {
  private secret: string;

  constructor() {
    this.secret = secret;
  }

  encode(data: JwtData) {
    return jwtwebtoken.sign({ ...data }, this.secret);
  }

  verify(token: string) {
    try {
      jwtwebtoken.verify(token, this.secret);
      return true;
    } catch (error) {
      return false;
    }
  }

  decode(token: string) {
    return jwtwebtoken.decode(token) as JwtData;
  }

  verifyAndDecode(token: string) {
    const verified = this.verify(token);
    if (verified) {
      return this.decode(token);
    } else {
      return null;
    }
  }
}

export const jwt = new Jwt();

function getConstants() {
  const constants = z
    .object({
      JWT_SECRET: z.string(),
    })
    .parse(env);

  return {
    secret: constants.JWT_SECRET,
  };
}

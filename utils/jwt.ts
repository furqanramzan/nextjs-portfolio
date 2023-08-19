import * as jose from 'jose';
import { JWT_SECRET } from './contants';
import promise from './promise';

export interface JwtData {
  id: number;
  name: string;
  email: string;
}

class Jwt {
  private secret: string;

  constructor() {
    this.secret = JWT_SECRET;
  }

  encode(data: JwtData) {
    return new jose.SignJWT({ user: data })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(new TextEncoder().encode(this.secret));
  }

  async verify(token: string) {
    const verifyPromise = await promise(() =>
      jose.jwtVerify(token, new TextEncoder().encode(this.secret)),
    );

    if (verifyPromise.success) {
      return verifyPromise.data.payload.user as JwtData;
    }
  }
}

export const jwt = new Jwt();

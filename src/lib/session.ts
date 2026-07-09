import { getIronSession, SessionOptions } from 'iron-session';
import { cookies } from 'next/headers';

export interface SessionData {
  user?: {
    email: string;
    name: string;
  };
  isLoggedIn?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || '',
  cookieName: 'ahdimizan-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  },
  ttl: 60 * 60 * 24 * 7,
};

export function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error('SESSION_SECRET çevre değişkeni tanımlanmamış.');
  }
  if (secret.length < 32) {
    throw new Error('SESSION_SECRET en az 32 karakter uzunluğunda olmalıdır.');
  }
  return secret;
}

export async function getAppSession() {
  return getIronSession<SessionData>(cookies(), sessionOptions);
}

export async function getSessionFromRequest(req: Request, res: Response) {
  return getIronSession<SessionData>(req, res, sessionOptions);
}

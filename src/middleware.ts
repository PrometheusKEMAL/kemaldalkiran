import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/lib/session';

/**
 * Two-tier protection:
 * 1. Admin routes (/admin/*, /api/articles/*, /api/users) use HTTP Basic Auth.
 * 2. The rest of the site requires a valid member session cookie.
 * Public exceptions: login page, auth API, and static assets.
 */

const PUBLIC_PATHS = [
  '/uye-girisi',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/session',
];

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function basicUnauthorized(): NextResponse {
  return new NextResponse('Kimlik doğrulaması gerekli.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Ahd-i Mizan Yönetim", charset="UTF-8"',
    },
  });
}

function checkBasicAuth(req: NextRequest): boolean {
  const expectedUser = process.env.ADMIN_USER;
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) return false;

  const header = req.headers.get('authorization') || '';
  if (!header.startsWith('Basic ')) return false;

  try {
    const decoded = atob(header.slice(6));
    const sepIndex = decoded.indexOf(':');
    const user = decoded.slice(0, sepIndex);
    const pass = decoded.slice(sepIndex + 1);
    return safeEqual(user, expectedUser) && safeEqual(pass, expectedPass);
  } catch {
    return false;
  }
}

function isStaticPath(pathname: string): boolean {
  return (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(?:webp|webm|mp4|mp3|jpg|jpeg|png|gif|svg|ico|css|js|json)$/) !== null
  );
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Admin routes: HTTP Basic Auth
  const isAdminRoute =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api/articles') ||
    pathname === '/api/users';

  if (isAdminRoute) {
    if (checkBasicAuth(req)) {
      return NextResponse.next();
    }
    return basicUnauthorized();
  }

  // Public paths and static assets are allowed without a session
  if (PUBLIC_PATHS.includes(pathname) || isStaticPath(pathname)) {
    return NextResponse.next();
  }

  // Everything else requires a member session
  const res = NextResponse.next();
  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  if (!session.isLoggedIn || !session.user) {
    const loginUrl = new URL('/uye-girisi', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return res;
}

export const config = {
  matcher: ['/((?!robots\\.txt|sitemap\\.xml).*)'],
};

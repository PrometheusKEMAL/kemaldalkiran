import { NextRequest, NextResponse } from 'next/server';

/**
 * Protects the admin panel and the article write/delete API behind
 * HTTP Basic Auth. Credentials are read from environment variables and
 * never shipped to the client. Same-origin fetches from /admin will
 * automatically reuse the cached Basic credentials the browser stores.
 */

// Timing-safe-ish string comparison for the Edge runtime (no Node crypto).
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function unauthorized(): NextResponse {
  return new NextResponse('Kimlik doğrulaması gerekli.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Ahd-i Mizan Yönetim", charset="UTF-8"',
    },
  });
}

export function middleware(req: NextRequest) {
  const expectedUser = process.env.ADMIN_USER;
  const expectedPass = process.env.ADMIN_PASSWORD;

  // If credentials are not configured, deny access to protected areas
  // rather than leaving them wide open.
  if (!expectedUser || !expectedPass) {
    return new NextResponse('Yönetim erişimi yapılandırılmamış.', { status: 503 });
  }

  const header = req.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6));
      const sepIndex = decoded.indexOf(':');
      const user = decoded.slice(0, sepIndex);
      const pass = decoded.slice(sepIndex + 1);

      const userOk = safeEqual(user, expectedUser);
      const passOk = safeEqual(pass, expectedPass);
      if (userOk && passOk) {
        return NextResponse.next();
      }
    } catch {
      // fall through to unauthorized
    }
  }

  return unauthorized();
}

export const config = {
  matcher: ['/admin/:path*', '/api/articles/:path*'],
};

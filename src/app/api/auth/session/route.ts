import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/lib/session';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const res = new NextResponse();
  const session = await getSessionFromRequest(req, res);

  if (session.isLoggedIn && session.user) {
    return NextResponse.json({ isLoggedIn: true, user: session.user });
  }

  return NextResponse.json({ isLoggedIn: false });
}

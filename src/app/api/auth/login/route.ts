import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest, getSessionSecret } from '@/lib/session';
import { verifyPassword } from '@/lib/users';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    getSessionSecret();
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'E-posta ve şifre gereklidir.' },
        { status: 400 }
      );
    }

    const user = await verifyPassword(email, password);
    if (!user) {
      return NextResponse.json(
        { error: 'E-posta veya şifre hatalı.' },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ success: true, user: { email: user.email, name: user.name } });
    const session = await getSessionFromRequest(req, res);
    session.user = { email: user.email, name: user.name };
    session.isLoggedIn = true;
    await session.save();

    return res;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Giriş işlemi başarısız oldu.' },
      { status: 500 }
    );
  }
}

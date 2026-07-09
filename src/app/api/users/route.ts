import { NextResponse } from 'next/server';
import { listUsers, createUser, deleteUser } from '@/lib/users';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const users = await listUsers();
    return NextResponse.json({ users });
  } catch (error) {
    console.error('List users error:', error);
    return NextResponse.json(
      { error: 'Kullanıcılar listelenirken bir hata oluştu.' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    if (!email || !name || !password) {
      return NextResponse.json(
        { error: 'E-posta, isim ve şifre gereklidir.' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Şifre en az 6 karakter olmalıdır.' },
        { status: 400 }
      );
    }

    const user = await createUser(email, name, password);
    return NextResponse.json({
      success: true,
      user: { email: user.email, name: user.name, createdAt: user.createdAt },
    });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Kullanıcı oluşturulurken bir hata oluştu.' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'E-posta gereklidir.' },
        { status: 400 }
      );
    }

    await deleteUser(email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Kullanıcı silinirken bir hata oluştu.' },
      { status: 500 }
    );
  }
}

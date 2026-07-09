import { kv } from '@vercel/kv';
import { compare, hash } from 'bcryptjs';
import { promises as fs } from 'fs';
import path from 'path';

export interface User {
  email: string;
  name: string;
  passwordHash: string;
  createdAt: string;
}

const USERS_KEY = 'ahdimizan:users';
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

function hasKv(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function readUsersFromFile(): Promise<User[]> {
  try {
    const raw = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(raw) as User[];
  } catch {
    return [];
  }
}

async function writeUsersToFile(users: User[]): Promise<void> {
  await fs.mkdir(path.dirname(USERS_FILE), { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

async function readUsers(): Promise<User[]> {
  if (hasKv()) {
    const users = await kv.get<User[]>(USERS_KEY);
    return users || [];
  }
  return readUsersFromFile();
}

async function writeUsers(users: User[]): Promise<void> {
  if (hasKv()) {
    await kv.set(USERS_KEY, users);
    return;
  }
  await writeUsersToFile(users);
}

export async function listUsers(): Promise<Omit<User, 'passwordHash'>[]> {
  const users = await readUsers();
  return users.map(({ passwordHash, ...rest }) => rest);
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = await readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  return users.find((u) => u.email.toLowerCase() === normalizedEmail) || null;
}

export async function verifyPassword(email: string, password: string): Promise<User | null> {
  const user = await getUserByEmail(email);
  console.log('[verifyPassword] storage:', hasKv() ? 'kv' : 'file', 'email:', email, 'found:', !!user);
  if (!user) return null;
  const isValid = await compare(password, user.passwordHash);
  console.log('[verifyPassword] password valid:', isValid);
  if (!isValid) return null;
  return user;
}

export async function createUser(email: string, name: string, password: string): Promise<User> {
  const existing = await getUserByEmail(email);
  if (existing) {
    throw new Error('Bu e-posta adresiyle bir kullanıcı zaten var.');
  }

  const passwordHash = await hash(password, 12);
  const newUser: User = {
    email: email.trim().toLowerCase(),
    name: name.trim(),
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  const users = await readUsers();
  users.push(newUser);
  await writeUsers(users);
  console.log('[createUser] saved to', hasKv() ? 'kv' : 'file', 'total:', users.length, 'email:', newUser.email);

  return newUser;
}

export async function deleteUser(email: string): Promise<void> {
  const users = await readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const filtered = users.filter((u) => u.email.toLowerCase() !== normalizedEmail);
  await writeUsers(filtered);
}

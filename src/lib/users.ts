import { kv } from '@vercel/kv';
import { compare, hash } from 'bcryptjs';
import { promises as fs } from 'fs';
import path from 'path';

export interface User {
  email: string;
  name: string; // takma ad / meclis içi isim
  passwordHash: string;
  createdAt: string;
  realName?: string;
  nickname?: string;
  age?: number;
  gender?: 'erkek' | 'kadın' | 'belirtmek-istemiyor';
  joinDate?: string;
  isReferred?: boolean;
  referredBy?: string;
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

export interface CreateUserInput {
  email: string;
  name: string;
  password: string;
  realName?: string;
  nickname?: string;
  age?: number;
  gender?: 'erkek' | 'kadın' | 'belirtmek-istemiyor';
  joinDate?: string;
  isReferred?: boolean;
  referredBy?: string;
}

export async function createUser(input: CreateUserInput): Promise<User> {
  const { email, name, password, realName, nickname, age, gender, joinDate, isReferred, referredBy } = input;
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
    realName: realName?.trim() || undefined,
    nickname: nickname?.trim() || undefined,
    age: age ?? undefined,
    gender: gender || undefined,
    joinDate: joinDate?.trim() || undefined,
    isReferred: isReferred ?? false,
    referredBy: referredBy?.trim() || undefined,
  };

  const users = await readUsers();
  users.push(newUser);
  await writeUsers(users);
  console.log('[createUser] saved to', hasKv() ? 'kv' : 'file', 'total:', users.length, 'email:', newUser.email);

  return newUser;
}

export interface UpdateUserInput extends Partial<Omit<CreateUserInput, 'email' | 'password'>> {
  password?: string;
}

export async function updateUser(email: string, input: UpdateUserInput): Promise<User> {
  const users = await readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const index = users.findIndex((u) => u.email.toLowerCase() === normalizedEmail);
  if (index === -1) {
    throw new Error('Kullanıcı bulunamadı.');
  }

  const existing = users[index];
  const updates: Partial<User> = {};

  if (input.name !== undefined) updates.name = input.name.trim();
  if (input.realName !== undefined) updates.realName = input.realName?.trim() || undefined;
  if (input.nickname !== undefined) updates.nickname = input.nickname?.trim() || undefined;
  if (input.age !== undefined) updates.age = input.age ?? undefined;
  if (input.gender !== undefined) updates.gender = input.gender || undefined;
  if (input.joinDate !== undefined) updates.joinDate = input.joinDate?.trim() || undefined;
  if (input.isReferred !== undefined) updates.isReferred = input.isReferred ?? false;
  if (input.referredBy !== undefined) updates.referredBy = input.referredBy?.trim() || undefined;

  if (input.password && input.password.length >= 6) {
    updates.passwordHash = await hash(input.password, 12);
  }

  const updatedUser: User = { ...existing, ...updates };
  users[index] = updatedUser;
  await writeUsers(users);
  console.log('[updateUser] saved to', hasKv() ? 'kv' : 'file', 'email:', updatedUser.email);

  return updatedUser;
}

export async function deleteUser(email: string): Promise<void> {
  const users = await readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const filtered = users.filter((u) => u.email.toLowerCase() !== normalizedEmail);
  await writeUsers(filtered);
}

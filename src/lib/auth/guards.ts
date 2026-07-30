import { redirect } from 'next/navigation';
import type { Role, SessionUser } from '@/types/api';
import { ROLE_HOME } from '@/lib/constants/routes';
import { getSessionUser } from './session';

export async function requireUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) redirect('/login');
  return user;
}

export async function requireRole(allowed: Role[]): Promise<SessionUser> {
  const user = await requireUser();
  if (user.accountStatus !== 'ACTIVE') redirect('/login?reason=account-inactive');
  if (!allowed.includes(user.role)) redirect(ROLE_HOME[user.role]);
  return user;
}

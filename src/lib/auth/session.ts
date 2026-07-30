import { cookies } from 'next/headers';
import type { SessionUser } from '@/types/api';

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get('popo_session_user')?.value;
  if (!raw) return null;
  try { return JSON.parse(decodeURIComponent(raw)) as SessionUser; }
  catch { return null; }
}

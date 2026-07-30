import type { Role } from '@/types/api';

export const ROLE_HOME: Record<Role, string> = {
  CUSTOMER: '/beranda',
  WORKER: '/internal/worker',
  DRIVER: '/internal/driver',
  OUTLET_ADMIN: '/internal/outlet-admin/dashboard',
  SUPER_ADMIN: '/internal/super-admin/dashboard',
};

export const INTERNAL_ROLES: Role[] = ['WORKER', 'DRIVER', 'OUTLET_ADMIN', 'SUPER_ADMIN'];

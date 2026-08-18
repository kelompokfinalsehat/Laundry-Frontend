"use client";

import { create } from "zustand";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  accountType: "customer" | "employee";
  isEmailVerified: boolean;
  profilePhotoUrl?: string | null;
  phone?: string | null;
  authProvider: string;
};

type AuthState = {
  user: AuthUser | null;
  isInitializing: boolean;
};

type AuthActions = {
  setUser: (user: AuthUser) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  isInitializing: true,

  setUser: (user) => set({ user, isInitializing: false }),
  clearUser: () => set({ user: null, isInitializing: false }),
}));

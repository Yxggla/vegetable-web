"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type AuthUser = {
	id: string;
	username: string;
	email: string;
};

type AuthState = {
	user: AuthUser | null;
	setUser: (user: AuthUser) => void;
	clearUser: () => void;
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
			clearUser: () => set({ user: null }),
		}),
		{
			name: "vegetableweb:auth",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

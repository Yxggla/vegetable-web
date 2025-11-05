"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

export type AuthUser = {
	id: string;
	username: string;
	email: string;
};

type AuthContextValue = {
	user: AuthUser | null;
	setUser: (user: AuthUser) => void;
	clearUser: () => void;
};

const STORAGE_KEY = "vegetableweb:auth-user";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUserState] = useState<AuthUser | null>(null);

	useEffect(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (!raw) return;

			const parsed = JSON.parse(raw) as AuthUser;
			if (parsed && parsed.id && parsed.username && parsed.email) {
				setUserState(parsed);
			}
		} catch (error) {
			console.error("Failed to restore auth user", error);
		}
	}, []);

	const setUser = useCallback((value: AuthUser) => {
		setUserState(value);
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
	}, []);

	const clearUser = useCallback(() => {
		setUserState(null);
		window.localStorage.removeItem(STORAGE_KEY);
	}, []);

	const value = useMemo(
		() => ({
			user,
			setUser,
			clearUser,
		}),
		[user, setUser, clearUser],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
}

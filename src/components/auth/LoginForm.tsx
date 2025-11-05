"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { loginUser, registerUser } from "@/lib/auth";
import {
	validateEmail,
	validatePassword,
	validateUsername,
} from "@/lib/validation";
import { AuthModeToggle } from "./AuthModeToggle";

type AuthMode = "signIn" | "signUp";

export function LoginForm() {
	const router = useRouter();
	const { setUser } = useAuth();
	const [mode, setMode] = useState<AuthMode>("signIn");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [statusMessage, setStatusMessage] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setStatusMessage(null);
		setErrorMessage(null);

		try {
			if (mode === "signIn") {
				const sanitizedEmail = email.trim().toLowerCase();
				const user = await loginUser({ email: sanitizedEmail, password });
				setUser(user);
				setStatusMessage(`Signed in successfully. Welcome back, ${user.username}!`);
				router.push("/");
				return;
			}

			const trimmedUsername = username.trim();
			const usernameCheck = validateUsername(trimmedUsername);
			if (!usernameCheck.valid) {
				setErrorMessage(usernameCheck.message);
				return;
			}

			const emailCheck = validateEmail(email.trim());
			if (!emailCheck.valid) {
				setErrorMessage(emailCheck.message);
				return;
			}

			const passwordCheck = validatePassword(password);
			if (!passwordCheck.valid) {
				setErrorMessage(passwordCheck.message);
				return;
			}

			await registerUser({
				username: trimmedUsername,
				email: email.trim().toLowerCase(),
				password,
			});

			setStatusMessage("Registration successful! Please sign in with your new account.");
			setMode("signIn");
			setUsername("");
		} catch (error) {
			const message =
				error instanceof Error ? error.message : "Something went wrong.";
			setErrorMessage(message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-8 rounded-2xl border border-green-100 bg-white/80 p-8 shadow-xl backdrop-blur">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold text-gray-900">
					{mode === "signIn" ? "Welcome back" : "Create an account"}
				</h1>
				<p className="text-sm text-gray-500">
					Sign in with your VegetableWeb account or register a new one.
				</p>
			</div>

			<form className="space-y-6" onSubmit={handleSubmit}>
				<div className="space-y-4">
					{mode === "signIn" ? null : (
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700"
							>
								Username
							</label>
							<input
								id="username"
								type="text"
								autoComplete="username"
								required={mode === "signUp"}
								value={username}
								onChange={(event) => setUsername(event.target.value)}
								className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
								placeholder="e.g. veggie_lover"
							/>
						</div>
					)}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							autoComplete="email"
							required
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							autoComplete={
								mode === "signIn" ? "current-password" : "new-password"
							}
							required
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
							placeholder="Enter password"
						/>
					</div>
				</div>

				{statusMessage ? (
					<p className="text-sm font-medium text-green-600">{statusMessage}</p>
				) : null}

				{errorMessage ? (
					<p className="text-sm font-medium text-red-600">{errorMessage}</p>
				) : null}

				<button
					type="submit"
					disabled={loading}
					className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
				>
					{loading ? "Submitting..." : mode === "signIn" ? "Sign in" : "Sign up"}
				</button>
			</form>

			<AuthModeToggle mode={mode} onSwitch={setMode} />
		</div>
	);
}

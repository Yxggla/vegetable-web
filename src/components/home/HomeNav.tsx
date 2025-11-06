"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DesktopAccountMenu } from "@/components/navigation/DesktopAccountMenu";
import { MobileAccountMenu } from "@/components/navigation/MobileAccountMenu";
import { primaryNavItems } from "@/components/navigation/navItems";
import { useAuthStore } from "@/store/authStore";

export function HomeNav() {
	const router = useRouter();
	const user = useAuthStore((state) => state.user);
	const clearUser = useAuthStore((state) => state.clearUser);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const userInitial = user?.username?.charAt(0).toUpperCase() ?? "U";

	const handleSignOut = () => {
		clearUser();
		setMobileMenuOpen(false);
		router.push("/");
	};

	return (
		<nav className="sticky top-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center">
					<Link
						href="/"
						className="text-2xl font-bold text-green-600 transition-colors hover:text-green-700"
					>
						VegetableWeb
					</Link>
				</div>
				<div className="hidden md:flex md:items-center md:space-x-6">
					<div className="flex items-baseline space-x-4">
						{primaryNavItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
							>
								{item.label}
							</Link>
						))}
					</div>
					{user ? (
						<DesktopAccountMenu
							initial={userInitial}
							username={user.username}
							onSignOut={handleSignOut}
						/>
					) : (
						<Link
							href="/login"
							className="rounded-md border border-green-200 px-3 py-2 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
						>
							Sign in
						</Link>
					)}
				</div>
				<div className="md:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen((open) => !open)}
						className="text-gray-700 transition-colors hover:text-green-600"
						aria-label="Toggle navigation"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
							/>
						</svg>
					</button>
				</div>
			</div>
			{mobileMenuOpen ? (
				<div className="border-t border-green-100 bg-white/95 backdrop-blur md:hidden">
					<div className="space-y-2 px-4 pt-4 pb-6">
						{primaryNavItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMobileMenuOpen(false)}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600"
							>
								{item.label}
							</Link>
						))}
						{user ? (
							<MobileAccountMenu
								initial={userInitial}
								username={user.username}
								onSignOut={handleSignOut}
							/>
						) : (
							<Link
								href="/login"
								onClick={() => setMobileMenuOpen(false)}
								className="block rounded-md border border-green-200 px-3 py-2 text-base font-semibold text-green-600 transition-colors hover:bg-green-50"
							>
								Sign in
							</Link>
						)}
					</div>
				</div>
			) : null}
		</nav>
	);
}

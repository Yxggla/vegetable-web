"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type NavItem = {
	href: string;
	label: string;
};

const navItems: NavItem[] = [
	{ href: "/", label: "首页" },
	{ href: "/about", label: "关于我们" },
	{ href: "/technology", label: "核心技术" },
	{ href: "/impact", label: "社会影响" },
	{ href: "/products", label: "产品方案" },
	{ href: "/testimonials", label: "客户反馈" },
	{ href: "/contact", label: "联系我们" },
];

export function HomeNav() {
	const router = useRouter();
	const { user, clearUser } = useAuth();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileAccountOpen, setMobileAccountOpen] = useState(false);
	const [profileMenuOpen, setProfileMenuOpen] = useState(false);
	const profileMenuRef = useRef<HTMLDivElement | null>(null);

	const userInitial = user?.username?.charAt(0).toUpperCase() ?? "V";

	const toggleMobileMenu = useCallback(() => {
		setMobileMenuOpen((open) => !open);
		setProfileMenuOpen(false);
	}, []);

	const closeMobileMenu = useCallback(() => {
		setMobileMenuOpen(false);
		setMobileAccountOpen(false);
	}, []);

	const toggleProfileMenu = useCallback(() => {
		setProfileMenuOpen((open) => !open);
	}, []);

	const closeProfileMenu = useCallback(() => {
		setProfileMenuOpen(false);
	}, []);

	const handleLogout = useCallback(() => {
		clearUser();
		setMobileMenuOpen(false);
		setMobileAccountOpen(false);
		setProfileMenuOpen(false);
		router.push("/");
	}, [clearUser, router]);

	useEffect(() => {
		if (!profileMenuOpen) {
			return;
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (
				profileMenuRef.current &&
				!profileMenuRef.current.contains(event.target as Node)
			) {
				closeProfileMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [profileMenuOpen, closeProfileMenu]);

	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link
								href="/"
								className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
							>
								VegetableWeb
							</Link>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-6">
							<div className="flex items-baseline space-x-4">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
									>
										{item.label}
									</Link>
								))}
							</div>
							{user ? (
								<div className="relative" ref={profileMenuRef}>
									<button
										type="button"
										onClick={toggleProfileMenu}
										className="flex items-center space-x-3 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-100"
										aria-haspopup="true"
										aria-expanded={profileMenuOpen}
									>
										<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
											{userInitial}
										</span>
										<span>{user.username}</span>
										<svg
											className={`h-4 w-4 text-green-600 transition-transform ${
												profileMenuOpen ? "rotate-180" : ""
											}`}
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
									{profileMenuOpen ? (
										<div className="absolute right-0 mt-3 w-44 rounded-xl border border-green-100 bg-white/95 p-2 text-sm shadow-lg">
											<button
												type="button"
												onClick={handleLogout}
												className="block w-full rounded-lg px-3 py-2 text-left font-medium text-green-600 transition-colors hover:bg-green-50"
											>
												退出登录
											</button>
										</div>
									) : null}
								</div>
							) : (
								<Link
									href="/login"
									className="rounded-md border border-green-200 px-3 py-2 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
								>
									登录
								</Link>
							)}
						</div>
					</div>
					<div className="md:hidden">
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="text-gray-700 hover:text-green-600"
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
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{mobileMenuOpen ? (
				<div className="md:hidden border-t border-green-100 bg-white/95 backdrop-blur">
					<div className="px-4 pt-4 pb-6 space-y-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={closeMobileMenu}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
							>
								{item.label}
							</Link>
						))}
						{user ? (
							<div className="rounded-lg border border-green-100 bg-green-50 px-4 py-3 shadow-sm">
								<button
									type="button"
									onClick={() => setMobileAccountOpen((open) => !open)}
									className="flex w-full items-center justify-between"
								>
									<div className="flex items-center space-x-3">
										<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
											{userInitial}
										</span>
										<div className="text-left">
											<p className="text-base font-semibold text-green-700">
												{user.username}
											</p>
											<p className="text-xs text-gray-500">点击查看账号操作</p>
										</div>
									</div>
									<svg
										className={`h-5 w-5 text-green-600 transition-transform ${
											mobileAccountOpen ? "rotate-180" : ""
										}`}
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
								{mobileAccountOpen ? (
									<div className="mt-3 border-t border-green-100 pt-3">
										<button
											type="button"
											onClick={handleLogout}
											className="block w-full rounded-md border border-green-200 px-3 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-100"
										>
											退出登录
										</button>
									</div>
								) : null}
							</div>
						) : (
							<Link
								href="/login"
								onClick={closeMobileMenu}
								className="block rounded-md border border-green-200 px-3 py-2 text-base font-semibold text-green-600 transition-colors hover:bg-green-50"
							>
								登录
							</Link>
						)}
					</div>
				</div>
			) : null}
		</nav>
	);
}

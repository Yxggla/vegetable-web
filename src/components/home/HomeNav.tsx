"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { DesktopAccountMenu } from "@/components/navigation/DesktopAccountMenu";
import { MobileAccountMenu } from "@/components/navigation/MobileAccountMenu";
import { PillNav } from "@/components/navigation/PillNav";
import { primaryNavItems } from "@/components/navigation/navItems";
import { useAuthStore } from "@/store/authStore";

export function HomeNav() {
	const router = useRouter();
	const pathname = usePathname();
	const user = useAuthStore((state) => state.user);
	const clearUser = useAuthStore((state) => state.clearUser);

	const userInitial = user?.username?.charAt(0).toUpperCase() ?? "U";

	const handleSignOut = () => {
		clearUser();
		router.push("/");
	};

	return (
		<header className="sticky top-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<PillNav
						logo="/logo.PNG"
						logoAlt="VegetableWeb"
						items={primaryNavItems}
						activeHref={pathname}
						baseColor="#15803d"
						pillColor="#ffffff"
						hoveredPillTextColor="#f0fdf4"
						pillTextColor="#14532d"
						className="text-sm"
						wrapperClassName="relative flex-1 md:flex-none"
					/>
					<div className="hidden md:flex items-center space-x-4">
						{user ? (
							<DesktopAccountMenu
								initial={userInitial}
								username={user.username}
								onSignOut={handleSignOut}
							/>
						) : (
							<Link
								href="/login"
								className="rounded-md border border-green-200 px-4 py-2 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
							>
								Sign in
							</Link>
						)}
					</div>
				</div>
				<div className="md:hidden">
					{user ? (
						<MobileAccountMenu
							initial={userInitial}
							username={user.username}
							onSignOut={handleSignOut}
						/>
					) : (
						<Link
							href="/login"
							className="block rounded-md border border-green-200 px-3 py-2 text-base font-semibold text-green-600 text-center transition-colors hover:bg-green-50"
						>
							Sign in
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
